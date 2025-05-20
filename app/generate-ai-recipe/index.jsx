import { View, Text, Platform, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../shared/Colors";
import Button from "../../components/shared/Button";
import { GenerateRecipeOptionsAiModel } from "../../services/AIModel";
import Prompt from "../../shared/Prompt";

export default function GenerateAiRecipe() {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);

  const GenerateRecipeOptions = async () => {
    setLoading(true);
    // Make AI model call to generate recipe Options
    try {
      const PROMPT = input + Prompt.GENERATE_RECIPE_OPTION_PROMPT;
      const result = await GenerateRecipeOptionsAiModel(PROMPT);
      // Log full result for debugging
      // console.log("FULL AI RESPONSE:", JSON.stringify(result, null, 2));

      // Defensive check before accessing deeply nested fields
      const content = result?.choices?.[0]?.message?.content;

      if (!content) {
        console.error(" No content returned from AI");
        return;
      }

      // Remove markdown code block formatting
      const cleanedContent = content.replace(/```json|```/g, "").trim();

      // Parse the JSON string
      const recipes = JSON.parse(cleanedContent);

      //console.log("AI Response Content:", content);
      console.log("Parsed Recipes:", recipes);
      // TODO: update state to show recipes in UI
    } catch (e) {
      console.log(" Error:", e.message || e);
    } finally {
      setLoading(false);
    }
    //   console.log(result.choices[0].message);
    //   setLoading(false);
    // } catch (e) {
    //   setLoading(false);
    //   alert(e.message || "Something went wrong");
    //   console.log(e)
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
