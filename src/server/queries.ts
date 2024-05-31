import { auth } from '@clerk/nextjs/server';
import { db } from './db';
import { cards } from './db/schema';
import { redirect } from 'next/navigation';
import { and, eq } from 'drizzle-orm';

export async function createCard(front: string, back: string) {
  const user = auth();
  if (!user.userId) throw new Error('Unauthorized');

  await db.insert(cards).values({
    front,
    back,
    userId: user.userId,
  });

  redirect('/');
}

export async function deleteCard(id: number) {
  const user = auth();
  if (!user.userId) throw new Error('Unauthorized');

  await db
    .delete(cards)
    .where(and(eq(cards.id, id), eq(cards.userId, user.userId)));

  redirect('/mycards');
}

export async function updateCard(id: number, front: string, back: string) {
  const user = auth();
  if (!user.userId) throw new Error('Anauthorized');

  await db.update(cards).set({ front, back }).where(eq(cards.id, id));
}
