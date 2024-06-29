import { auth } from '@clerk/nextjs/server';
import { db } from '@/server/db';
import LanguageEditor from '@/app/_components/LanguageEditor';
import RoutingError from '@/app/_components/RoutingError';

export default async function Page({ params }: { params: { id: string } }) {
  const user = auth();

  const checkedNumber = parseInt(params.id);

  if (!checkedNumber)
    return (
      <RoutingError
        href="/collection/languages"
        buttonText="Back to your languages"
        errorText="Invalid language id."
      />
    );

  const language = await (user.userId
    ? db.query.languages.findFirst({
        where: (model, { eq, and }) =>
          and(eq(model.userId, user.userId), eq(model.id, checkedNumber)),
      })
    : []);

  if (!language || Array.isArray(language))
    return (
      <RoutingError
        href="/collection/languages"
        buttonText="Back to your languages"
        errorText="We couldn't find language with this id."
      />
    );

  return (
    <div className="flex w-full justify-center">
      <LanguageEditor name={language.name} id={language.id} />
    </div>
  );
}
