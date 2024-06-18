import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';

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
    where: (model, { eq, and }) =>
      and(
        eq(model.userId, user.userId),
        eq(model.languageId, languageIdNumber),
      ),
  });

  return (
    <div>
      <h1>{language.name}</h1>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            {card.front} | {card.back}
          </div>
        ))}
      </div>
    </div>
  );
}
