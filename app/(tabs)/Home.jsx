import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { UserContext } from "./../../context/UserContext";
import { router } from "expo-router";

export default function Home() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user?.weight) {
      router.replace("/preferance");
    }
  }, [user]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
