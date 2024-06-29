import { auth } from '@clerk/nextjs/server';
import { db } from '@/server/db';
import CardEditor from '@/app/_components/CardEditor';
import RoutingError from '@/app/_components/RoutingError';

export default async function Page({ params }: { params: { id: string } }) {
  const user = auth();

  const checkedNumber = parseInt(params.id);

  if (!checkedNumber)
    return (
      <RoutingError
        href="/collection/cards"
        buttonText="Back to your cards"
        errorText="Invalid card id."
      />
    );

  const card = await (user.userId
    ? db.query.cards.findFirst({
        where: (model, { eq, and }) =>
          and(eq(model.userId, user.userId), eq(model.id, checkedNumber)),
      })
    : []);

  const languages = await (user.userId
    ? db.query.languages.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
      })
    : []);

  if (!card || Array.isArray(card))
    return (
      <RoutingError
        href="/collection/cards"
        buttonText="Back to your cards"
        errorText="There is no card with such id."
      />
    );

  return (
    <div className="flex w-full justify-center">
      <CardEditor
        id={card.id}
        front={card.front}
        back={card.back}
        languages={languages}
        languageId={card.languageId}
      />
    </div>
  );
}
