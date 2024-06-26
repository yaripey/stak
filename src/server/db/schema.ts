import { sql } from 'drizzle-orm';
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `stak_${name}`);

export const languages = createTable(
  'language',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    userId: varchar('userId', { length: 256 }).notNull(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt'),
  },
  (example) => ({ name: index('name_idx').on(example.name) }),
);

export type LanguageType = typeof languages.$inferSelect;
export type LanguageWithCardsType = LanguageType & {
  cards: CardType[];
};

export const cards = createTable(
  'card',
  {
    id: serial('id').primaryKey(),
    front: varchar('front', { length: 256 }).notNull(),
    back: varchar('back', { length: 256 }).notNull(),
    userId: varchar('userId', { length: 256 }).notNull(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt'),
    languageId: integer('languageId')
      .references(() => languages.id)
      .notNull(),
    dontShowUntil: timestamp('dont_show_until')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    streak: integer('streak').default(0).notNull(),
  },
  (example) => ({ front: index('front_idx').on(example.front) }),
);

export type CardType = typeof cards.$inferSelect;
