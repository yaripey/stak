import { sql } from 'drizzle-orm';
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `stak_${name}`);

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
  },
  (example) => ({ front: index('front_idx').on(example.front) }),
);

export type CardType = typeof cards.$inferSelect;
