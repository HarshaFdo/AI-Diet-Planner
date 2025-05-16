import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "./../../shared/Colors";
import Input from "./../../components/shared/Input";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  FemaleSymbolFreeIcons,
  MaleSymbolFreeIcons,
  WeightScaleIcon,
} from "@hugeicons/core-free-icons";

export default function Preference() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Tell us about yourself
      </Text>
      <Text style={{ fontSize: 18, textAlign: "center", color: Colors.GRAY }}>
        This help us create your personalized meal plan
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Input placeholder={"e.g 70"} label="Weight (Kg)" />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Input placeholder={"e.g 5.10"} label="Height (ft.)" />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 18,
          }}
        >
          Gender
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              padding: 7,
              color: Colors.GRAY,
              borderRadius: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={MaleSymbolFreeIcons}
              size={40}
              color={Colors.BLUE}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 7,
              color: Colors.GRAY,
              borderRadius: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={FemaleSymbolFreeIcons}
              size={40}
              color={Colors.PINK}
            />
          </View>
        </View>
      </View>
      <View>
        <Text>What's Your Goal?</Text>
        <View>
          <HugeiconsIcon icon={WeightScaleIcon} />
          <View>
            <Text style={styles.goalText}>Weight Loss</Text>
            <Text>Reduce body fat & get leaner</Text>
          </View>
          <View>
            <HugeiconsIcon icon={WeightScaleIcon} />
            <View>
              <Text style={styles.goalText}>Weight Loss</Text>
              <Text>Reduce body fat & get leaner</Text>
            </View>
            <View>
              <HugeiconsIcon icon={WeightScaleIcon} />
              <View>
                <Text style={styles.goalText}>Weight Loss</Text>
                <Text>Reduce body fat & get leaner</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goalSubText: {
    color: Colors.GRAY,
  },
});
