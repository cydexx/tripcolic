import React from "react";
import { ScrollView } from "react-native";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

export default function App() {
  return (
    <ScrollView>
      <LoginScreen />
      <RegisterScreen />
    </ScrollView>
  );
}
