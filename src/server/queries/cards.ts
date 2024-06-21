import { db } from '../db';
import { cards } from '../db/schema';
import checkAuthorization from './helpers';
import { and, eq } from 'drizzle-orm';

export async function createCard(
  front: string,
  back: string,
  languageId: number,
) {
  const user = checkAuthorization();

  await db.insert(cards).values({
    front,
    back,
    userId: user.userId,
    languageId,
  });
}

export async function deleteCard(cardId: number) {
  const user = checkAuthorization();

  await db
    .delete(cards)
    .where(and(eq(cards.id, cardId), eq(cards.userId, user.userId)));
}

export async function updateCard(
  id: number,
  front: string,
  back: string,
  languageId: number,
) {
  const user = checkAuthorization();

  await db
    .update(cards)
    .set({ front, back, languageId })
    .where(and(eq(cards.id, id), eq(cards.userId, user.userId)));
}

export async function updateCardStreak(
  id: number,
  streak: number,
  dontShowUntil: Date,
) {
  const user = checkAuthorization();

  await db
    .update(cards)
    .set({ streak, dontShowUntil })
    .where(and(eq(cards.id, id), eq(cards.userId, user.userId)));
}
