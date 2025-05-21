import { View, Text } from "react-native";
import React from "react";
import RecipeIntro from "../../components/RecipeIntro";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function RecipeDetail() {
  const { recipeId } = useLocalSearchParams();
  console.log(recipeId);
  const recipeDetail = useQuery(api.Recipes.GetRecipeById, {
    id: recipeId == undefined && "jn76d56c5gmyw7eptn7c661gzd7gaq0e",
  });
  console.log("recipeDetail", recipeDetail);

  return (
    <View>
      {/*Recipe Intro */}
      <RecipeIntro />

      {/*Recipe Ingredient*/}

      {/* Cooking Steps*/}
    </View>
  );
}
