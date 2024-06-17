'use server';

import { revalidatePath } from 'next/cache';
import {
  createLanguage,
  deleteLanguage,
  updateLanguage,
} from '../queries/languages';
import { redirect } from 'next/navigation';

export async function createOrUpdateLanguageAction(
  name: string,
  id: number | undefined,
) {
  if (id === undefined) {
    await createLanguage(name);
  } else {
    await updateLanguage(id, name);
  }

  revalidatePath('/collection/languages');
  redirect('/collection/languages');
}

export async function deleteLanguageAction(id: number) {
  await deleteLanguage(id);

  revalidatePath('/collection/languages');
  redirect('/collection/languages');
}
