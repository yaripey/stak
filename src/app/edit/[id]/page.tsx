import CardEditor from '@/app/_components/CardEditor';
import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';

function ErrorText({ text }: { text: string }) {
  return (
    <div className="flex h-40 w-full items-center justify-center">{text}</div>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const user = auth();

  const checkedNumber = parseInt(params.id);

  if (!checkedNumber) return <ErrorText text="Invalid card id." />;

  const card = await (user.userId
    ? db.query.cards.findFirst({
        where: (model, { eq, and }) =>
          and(eq(model.userId, user.userId), eq(model.id, checkedNumber)),
      })
    : []);

  if (!card || Array.isArray(card))
    return <ErrorText text="There's no card with such id." />;

  return (
    <div className="flex w-full justify-center">
      <CardEditor id={card.id} front={card.front} back={card.back} />
    </div>
  );
}
