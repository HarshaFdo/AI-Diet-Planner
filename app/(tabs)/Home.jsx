import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import { UserContext } from "./../../context/UserContext";
import { router } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import TodayProgress from "../../components/TodayProgress";
import GenerateRecipeCard from "../../components/GenerateRecipeCard";
import TodaysMealPlan from "../../components/TodaysMealPlan";

export default function Home() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user?.weight) {
      router.replace("/preferance");
    }
  }, [user]);

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
          }}
        >
          <HomeHeader />
          <TodayProgress />
          <GenerateRecipeCard />
          <TodaysMealPlan />
        </View>
      }
    ></FlatList>
  );
}
