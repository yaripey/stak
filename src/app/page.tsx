import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  const user = auth();

  const cards = await (user.userId
    ? db.query.cards.findMany({
        orderBy: (model, { desc }) => desc(model.id),
        where: (model, { eq }) => eq(model.userId, user.userId),
      })
    : []);

  return (
    <main>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            {card.front} | {card.back}
          </div>
        ))}
      </div>
    </main>
  );
}
