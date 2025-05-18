import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { UserContext } from "./../../context/UserContext";
import { router } from "expo-router";
import HomeHeader from "../../components/shared/HomeHeader";
import TodayProgress from "../../components/shared/TodayProgress";

export default function Home() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user?.weight) {
      router.replace("/preferance");
    }
  }, [user]);

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <HomeHeader />
      <TodayProgress />
    </View>
  );
}
