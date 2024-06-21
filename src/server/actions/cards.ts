'use server';

import { revalidatePath } from 'next/cache';
import {
  createCard,
  deleteCard,
  updateCard,
  updateCardStreak,
} from '../queries/cards';
import { redirect } from 'next/navigation';

export async function createOrUpdateCard(
  front: string,
  back: string,
  languageId: number,
  id: number | undefined,
) {
  if (id === undefined) {
    await createCard(front, back, languageId);
  } else {
    await updateCard(id, front, back, languageId ?? 0);
  }

  revalidatePath('/collection/cards');
  redirect('/collection/cards');
}

export async function deleteCardAction(id: number) {
  await deleteCard(id);

  revalidatePath('/collection/cards');
  redirect('/collection/cards');
}

export async function updateCardStreakAction(
  id: number,
  streak: number,
  dontShowUntil: Date,
) {
  await updateCardStreak(id, streak, dontShowUntil);
}
