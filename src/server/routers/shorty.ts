import { z } from "zod";
import { t } from "../trpc";

const slugreg = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const urlreg =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

export const shortyrouter = t.router({
  addSlug: t.procedure
    .input(
      z.object({
        slug: z.string().min(1).regex(slugreg),
        url: z.string().min(3).regex(urlreg),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log("foo");
      const exists = await ctx.prisma.links.findFirst({
        where: {
          slug: input.slug,
        },
      });
      if (exists) {
        console.log(exists);
        return {
          text: "Slug Already Exists",
        };
      }
      await ctx.prisma.links.create({
        data: {
          slug: input.slug,
          url: input.url,
        },
      });
      return {
        text: `Created slug ${input.slug} pointing to url ${input.url}`,
      };
    }),
});
