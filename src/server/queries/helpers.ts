import { auth } from '@clerk/nextjs/server';

export default function checkAuthorization() {
  const user = auth();

  if (!user.userId) throw new Error('Unauthorized');
  else return user;
}
