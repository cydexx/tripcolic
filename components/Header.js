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
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "#D029B6",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={{
          paddingBottom: "2%",
          marginLeft: "2%",
        }}
      >
        <Image
          style={{
            width: 55,
            height: 55,
            resizeMode: "contain",
            borderRadius: 1000,
          }}
          source={require("../assets/menu.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{
            width: 55,
            height: 55,
            resizeMode: "contain",
            borderRadius: 1000,
          }}
          source={require("../assets/tripcolic_logo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingBottom: "2%",
          marginRight: "2%",
        }}
      >
        <Image
          style={{
            width: 55,
            height: 55,
            resizeMode: "contain",
            borderRadius: 1000,
          }}
          source={require("../assets/hornet.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
