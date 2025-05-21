import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import RecipeIntro from "../../components/RecipeIntro";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Colors from "../../shared/Colors";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeSteps from "../../components/RecipeSteps";
import Button from "../../components/shared/Button";

export default function RecipeDetail() {
  const { recipeId } = useLocalSearchParams();
  console.log(recipeId);
  const recipeDetail = useQuery(api.Recipes.GetRecipeById, {
    id: recipeId == undefined && "jn76d56c5gmyw7eptn7c661gzd7gaq0e",
  });
  console.log("recipeDetail-", recipeDetail);

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
            paddingTop: Platform.OS == "ios" ? 40 : 30,
            backgroundColor: Colors.WHITE,
            height: "100%",
          }}
        >
          {/*Recipe Intro */}
          <RecipeIntro recipeDetail={recipeDetail} />

          {/*Recipe Ingredient*/}
          <RecipeIngredients recipeDetail={recipeDetail} />

          {/* Cooking Steps*/}
          <RecipeSteps recipeDetail={recipeDetail} />

          <View style={{marginTop: 10}}>
            <Button title={"Add to Meal Plan"} />
          </View>
        </View>
      }
    ></FlatList>
  );
}
