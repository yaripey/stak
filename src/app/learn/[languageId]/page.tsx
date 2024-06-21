import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';
import CardsLearner from '../_components/CardsLearner';

export default async function Learn({
  params,
}: {
  params: { languageId: string };
}) {
  const user = auth();
  const languageIdNumber = parseInt(params.languageId);

  // TODO: Make this error beautiful
  if (!user.userId) return <div>Anauthorized</div>;

  const language = await db.query.languages.findFirst({
    where: (model, { eq, and }) =>
      and(eq(model.userId, user.userId), eq(model.id, languageIdNumber)),
  });

  // TODO: Better language error
  if (!language) return <div>Error selecting language.</div>;

  const cards = await db.query.cards.findMany({
    where: (model, { eq, and, lte }) =>
      and(
        eq(model.userId, user.userId),
        eq(model.languageId, languageIdNumber),
        lte(model.dontShowUntil, new Date()),
      ),
  });

  return <CardsLearner language={language} initCards={cards} />;
}
