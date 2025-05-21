import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateRecipe = mutation({
  args: {
    jsonData: v.any(),
    uid: v.id("Users"),
    recipeName: v.any(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("recipes", {
      jsonData: args.jsonData,
      uid: args.uid,
      recipeName: args.recipeName,
      imageUrl: args.imageUrl,
    });
    return result;
  },
});
