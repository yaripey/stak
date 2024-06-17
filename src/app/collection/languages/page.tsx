import { db } from '@/server/db';
import { LanguageWithCardsType, cards, languages } from '@/server/db/schema';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import LanguagesCollection from './_components/LanguagesCollection';

export default async function Page() {
  const user = auth();

  const rows = await (user.userId
    ? db
        .select()
        .from(languages)
        .where(eq(languages.userId, user.userId))
        .leftJoin(cards, eq(cards.languageId, languages.id))
    : []);

  const languagesWithCards = rows.reduce<LanguageWithCardsType[]>(
    (acc, row) => {
      const language = row.language;
      const card = row.card;

      if (!acc[language.id]) {
        acc[language.id] = { ...language, cards: [] };
      }

      if (card) {
        acc[language.id].cards.push(card);
      }

      return acc;
    },
    [],
  );

  return <LanguagesCollection languages={languagesWithCards} />;
}
