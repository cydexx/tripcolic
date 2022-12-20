import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <Header />

      <NavOptions />
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
