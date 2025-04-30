import { Dimensions, Image, Text, View } from "react-native";
import Colors from "./../shared/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("./../assets/images/landing.jpeg")}
        style={{
          width: "100%",
          height: Dimensions.get("screen").height,
        }}
      />
      <View
        style={{
          position: "absolute",
          height: Dimensions.get("screen").height,
          backgroundColor: "#0707075e",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./../assets/images/logo.png")}
          style={{
            width: 150,
            height: 150,
            marginTop: 100,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.WHITE,
          }}
        >
          AI Diet Planner
        </Text>
        <Text>
          Craft delicious, Healthy, meal plans tailored just for you. Achieve
          your goal with ease!
        </Text>
      </View>
    </View>
  );
}
