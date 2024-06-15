import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { db } from '@/server/db';
import { auth } from '@clerk/nextjs/server';
import CardRow from './_components/CardRow';
import { deleteCard } from '@/server/queries';
import { revalidatePath } from 'next/cache';

export default async function Page() {
  const user = auth();

  const cards = await (user.userId
    ? db.query.cards.findMany({
        orderBy: (model, { desc }) => desc(model.id),
        where: (model, { eq }) => eq(model.userId, user.userId),
      })
    : []);

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Front</TableHead>
            <TableHead>Back</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cards.map(({ front, back, id }) => (
            <CardRow
              id={id}
              front={front}
              back={back}
              key={id}
              deleteCard={async () => {
                'use server';

                // TODO: make a dialog to confirm deletion

                // TODO: add some popup about successfull delete
                await deleteCard(id);
                revalidatePath('/mycards');
              }}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
