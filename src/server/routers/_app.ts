import { t } from "../trpc";
import { shortyrouter } from "./shorty";

export const appRouter = t.router({
  shorty: shortyrouter,
});

export type AppRouter = typeof appRouter;
