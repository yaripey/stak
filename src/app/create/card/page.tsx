import { db } from '@/server/db';
import CardEditor from '../../_components/CardEditor';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = auth();

  const languages = await (user.userId
    ? db.query.languages.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
      })
    : []);

  if (languages.length === 0) {
    // TODO: have a popup here saying you need to create at least 1 language
    redirect('/create/language');
  }

  return <CardEditor languages={languages} />;
}
