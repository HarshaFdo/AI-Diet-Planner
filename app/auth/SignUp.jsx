import { View, Text, Image, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Link } from "expo-router";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert("Missing Fields!", "Enter All field value");
      return;
    }
  };
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 60,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Create New Account
      </Text>
      <View
        style={{
          marginTop: 20,
          width: "100%",
        }}
      >
        <Input placeholder={"Full Name"} onChangeText={setName} />
        <Input placeholder={"Email"} onChangeText={setEmail} />
        <Input
          placeholder={"Password"}
          password={true}
          onChangeText={setPassword}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          width: "100%",
        }}
      >
        <Button title={"Create Account"} onPress={() => onSignUp()} />
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Already have an account?
        </Text>
        <Link href={"/auth/SignIn"}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginTop: 5,
              fontWeight: "bold",
            }}
          >
            Sign In Here
          </Text>
        </Link>
      </View>
    </View>
  );
}
