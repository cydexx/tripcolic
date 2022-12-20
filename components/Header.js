import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={{ width: "100%", backgroundColor: "red" }}>
      <TouchableOpacity
        style={{
          paddingBottom: "2%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            width: 55,
            height: 55,
            resizeMode: "contain",
            borderRadius: 1000,
            marginHorizontal: "2%",
          }}
          source={require("../assets/tripcolic_logo.png")}
        />
        <Image
          style={{
            width: 55,
            height: 55,
            resizeMode: "contain",
            borderRadius: 1000,
            marginHorizontal: "2%",
          }}
          source={require("../assets/tripcolic_logo.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
