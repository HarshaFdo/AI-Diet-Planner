import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../shared/Colors";

export default function MealPlanCard({ mealPlanInfo }) {
  return (
    <View
      style={{
        padding: 10,
        diplay: "flex",
        flexDirection: "row",
        gap: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 10,
      }}
    >
      <Image
        source={{ uri: mealPlanInfo?.recipe?.imageUrl }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 15,
        }}
      />
      <View>
        <Text style={styles.mealTypeText}>
          {mealPlanInfo?.mealPlan?.mealType}
        </Text>
        <Text style={styles.recipeName}>
          {mealPlanInfo?.recipe?.recipeName}
        </Text>
        <Text style={styles.calories}>
          {mealPlanInfo?.recipe?.jsonData?.calories}kcal
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mealTypeText: {
    backgroundColor: Colors.SECONDARY,
    color: Colors.PRIMARY,
    padding: 1,
    paddingHorizontal: 10,
    borderRadius: 99,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  calories: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
    color: Colors.GREEN,
  },
});
