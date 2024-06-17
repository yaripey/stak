import { auth } from '@clerk/nextjs/server';
import EditErrorText from '../../_components/EditErrorText';
import { db } from '@/server/db';
import LanguageEditor from '@/app/_components/LanguageEditor';

export default async function Page({ params }: { params: { id: string } }) {
  const user = auth();

  const checkedNumber = parseInt(params.id);

  if (!checkedNumber) return <EditErrorText text="Invalid language id." />;

  const language = await (user.userId
    ? db.query.languages.findFirst({
        where: (model, { eq, and }) =>
          and(eq(model.userId, user.userId), eq(model.id, checkedNumber)),
      })
    : []);

  if (!language || Array.isArray(language))
    return <EditErrorText text="There's no language with such id." />;

  return (
    <div className="flex w-full justify-center">
      <LanguageEditor name={language.name} id={language.id} />
    </div>
  );
}
