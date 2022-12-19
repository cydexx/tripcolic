import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <ScrollView>
      <Login />
      <Register />
    </ScrollView>
  );
}
