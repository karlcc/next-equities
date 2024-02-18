import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const watchlistSchema = z.object({
  id: z.number(),
  issue: z.string(),
  createdBy: z.number(),
});

export type Watchlist = z.infer<typeof watchlistSchema>;

// export const taskSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   status: z.string(),
//   label: z.string(),
//   priority: z.string(),
// });

// export type Task = z.infer<typeof taskSchema>;
