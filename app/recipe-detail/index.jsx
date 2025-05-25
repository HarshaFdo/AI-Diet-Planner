import { View, Text, Platform, FlatList } from "react-native";
import React, { useRef } from "react";
import RecipeIntro from "../../components/RecipeIntro";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Colors from "../../shared/Colors";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeSteps from "../../components/RecipeSteps";
import Button from "../../components/shared/Button";
import ActionSheet from "react-native-actions-sheet";
import AddToMealActionSheet from "../../components/AddToMealActionSheet";

export default function RecipeDetail() {
  const { recipeId } = useLocalSearchParams();
  console.log(recipeId); //jn76d56c5gmyw7eptn7c661gzd7gaq0e

  const actionSheetRef = useRef(null);

  const recipeDetail = useQuery(api.Recipes.GetRecipeById, 
    recipeId? { id: recipeId } : undefined
  );
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
            gap: 5,
          }}
        >
          {/*Recipe Intro */}
          <RecipeIntro recipeDetail={recipeDetail} />

          {/*Recipe Ingredient*/}
          <RecipeIngredients recipeDetail={recipeDetail} />

          {/* Cooking Steps*/}
          <RecipeSteps recipeDetail={recipeDetail} />

          <View style={{ marginTop: 10 }}>
            <Button
              title={"Add to Meal Plan"}
              onPress={() => actionSheetRef.current.show()}
            />
          </View>

          <ActionSheet ref={actionSheetRef}>
            <AddToMealActionSheet
              recipeDetail={recipeDetail}
              hideActionSheet={() => actionSheetRef.current.hide()}
            />
          </ActionSheet>
        </View>
      }
    ></FlatList>
  );
}
