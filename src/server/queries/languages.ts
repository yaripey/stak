import { and, eq } from 'drizzle-orm';
import { db } from '../db';
import { cards, languages } from '../db/schema';
import checkAuthorization from './helpers';

export async function createLanguage(name: string) {
  const user = checkAuthorization();

  const newLanguages = await db.insert(languages).values({ name, userId: user.userId }).returning();

  return newLanguages[0].id
}

export async function deleteLanguage(languageId: number) {
  const user = checkAuthorization();

  await db
    .delete(cards)
    .where(
      and(eq(cards.userId, user.userId), eq(cards.languageId, languageId)),
    );

  await db
    .delete(languages)
    .where(
      and(eq(languages.userId, user.userId), eq(languages.id, languageId)),
    );
}

export async function updateLanguage(languageId: number, name: string) {
  const user = checkAuthorization();

  await db
    .update(languages)
    .set({ name })
    .where(
      and(eq(languages.userId, user.userId), eq(languages.id, languageId)),
    );
}
