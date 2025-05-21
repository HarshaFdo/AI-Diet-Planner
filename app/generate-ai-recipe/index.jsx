import { View, Text, Platform, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../shared/Colors";
import Button from "../../components/shared/Button";
import { GenerateAIRecipe } from "../../services/AIModel";
import Prompt from "../../shared/Prompt";
import RecipeOptionList from "../../components/RecipeOptionList";

export default function GenerateAiRecipe() {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);
  const [recipeOption, setRecipeOption] = useState();

  const GenerateRecipeOptions = async () => {
    setLoading(true);
    // Make AI model call to generate recipe Options
    try {
      const PROMPT = input + Prompt.GENERATE_RECIPE_OPTION_PROMPT;
      const result = await GenerateAIRecipe(PROMPT);
      console.log(result.choices[0].message);
      const extractJson = result.choices[0].message.content
        .replace("```json", "")
        .replace("```", "");
      const parsedJSONResp = JSON.parse(extractJson);
      console.log(parsedJSONResp);
      setRecipeOption(parsedJSONResp);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(e.message || "Something went wrong");
      console.log(e);
    }
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS == "ios" ? 40 : 30,
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        AI Recipe Generator
      </Text>
      <Text
        style={{
          marginTop: 5,
          color: Colors.GRAY,
          fontSize: 16,
        }}
      >
        Generate Personalized recipes using AI
      </Text>

      <TextInput
        style={styles.textarea}
        onChange={(value) => setInput(value)}
        placeholder="Enter your ingredient or recipe name"
      />
      <View style={{ marginTop: 25 }}>
        <Button
          title={"Generate Recipe"}
          onPress={GenerateRecipeOptions}
          loading={loading}
        />
      </View>

      {recipeOption?.length > 0 && (
        <RecipeOptionList recipeOption={recipeOption} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textarea: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    marginTop: 15,
    height: 150,
    textAlignVertical: "top",
    backgroundColor: Colors.WHITE,
  },
});
