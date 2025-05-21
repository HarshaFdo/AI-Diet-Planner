import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Colors from "../shared/Colors";
import Prompt from "../shared/Prompt";
import { GenerateAIRecipe, GenerateRecipeImage } from "../services/AIModel";
import LoadingDialog from "./LoadingDialog";
import { useMutation } from "convex/react";
import { api } from "./../convex/_generated/api";
import { UserContext } from "./../context/UserContext";
import { useRouter } from "expo-router";

export default function RecipeOptionList({ recipeOption }) {
  const [loading, setLoading] = useState(false);
  const CreateRecipe = useMutation(api.Recipes.CreateRecipe);
  const { user } = useContext(UserContext);
  const router = useRouter();

  const onRecipeOptionSelect = async (recipe) => {
    setLoading(true);
    const PROMPT =
      "RecipeName: " +
      recipe?.recipeName +
      " Desceiption: " +
      recipe?.description +
      Prompt.GENERATE_COMPLETE_RECIPE_PROMPT;

    try {
      const result = await GenerateAIRecipe(PROMPT);
      const extractJson = result.choices[0].message.content
        .replace("```json", "")
        .replace("```", "");
      const parsedJSONResp = JSON.parse(extractJson);
      console.log(parsedJSONResp);
      // Generate RecipeImage
      const aiImageResp = await GenerateRecipeImage(
        parsedJSONResp?.imagePrompt
      );
      console.log(aiImageResp?.data?.image);
      // Save to Data Base
      const saveRecipeResult = await CreateRecipe({
        jsonData: parsedJSONResp,
        imageUrl: aiImageResp?.data?.image,
        recipeName: parsedJSONResp?.recipeName,
        uid: user?._id,
      });
      console.log(saveRecipeResult);
      // Redirect to Recipe Details Screen
      setLoading(false);
      router.push({
        pathname: "/recipe-detail",
        recipeId: saveRecipeResult,
      });
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Selected Recipe
      </Text>
      <View>
        {recipeOption?.map((item, index) => (
          <TouchableOpacity
            onPress={() => onRecipeOptionSelect(item)}
            key={index}
            style={{
              padding: 15,
              borderWidth: 0.2,
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item?.recipeName}
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
              }}
            >
              {item?.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <LoadingDialog loading={loading} />
    </View>
  );
}
