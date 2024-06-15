'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createCard } from '@/server/queries';
import { redirect } from 'next/navigation';

const formSchema = z.object({
  front: z.string(),
  back: z.string(),
});

export default function CardEditor() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      front: '',
      back: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createCard(values.front, values.back);

    // TODO: This is a strange workaround, figure this out
    try {
      redirect('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="front"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Front</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>The word/phrase itself.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="back"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Back</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Its translation.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
