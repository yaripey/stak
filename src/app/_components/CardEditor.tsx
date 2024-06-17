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
import { LanguageType } from '@/server/db/schema';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createOrUpdateCard } from '@/server/actions/cards';

const formSchema = z.object({
  front: z.string(),
  back: z.string(),
  languageId: z.string({ required_error: 'Please select a language.' }),
});

type CardEditorProps = {
  front?: string;
  back?: string;
  id?: number;
  languageId?: number;
  languages: LanguageType[];
};

export default function CardEditor({
  id,
  front,
  back,
  languageId,
  languages,
}: CardEditorProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      front: front ?? '',
      back: back ?? '',
      languageId: languageId ? languageId.toString() : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createOrUpdateCard(
      values.front,
      values.back,
      parseInt(values.languageId),
      id,
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="languageId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language for this card" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem
                      key={language.id}
                      value={language.id.toString()}
                    >
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
