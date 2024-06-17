import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';
import CardsCollection from './_components/CardsCollection';

export default async function Page() {
  const user = auth();

  const cards = await (user.userId
    ? db.query.cards.findMany({
        orderBy: (model, { desc }) => desc(model.id),
        where: (model, { eq }) => eq(model.userId, user.userId),
      })
    : []);

  const languages = await (user.userId
    ? db.query.languages.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
      })
    : []);

  return <CardsCollection cards={cards} languages={languages} />;
}
