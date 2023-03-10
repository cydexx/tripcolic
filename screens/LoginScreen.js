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
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
function LoginScreen() {
  return (
    <HideKeyboard>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 45,
            color: "#D029B6",
            paddingTop: 45,
            fontWeight: "bold",
          }}
        >
          TRIPCOLIC
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 45,
              color: "#fff",
              margin: 15,
            }}
          >
            Sign In
          </Text>
          <Text
            style={{
              color: "#fff",
              margin: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            If You Need Any Support{" "}
            <Pressable onPress={() => Alert.alert("Log in button ke")}>
              <Text
                style={{
                  color: "#D029B6",
                }}
              >
                Click Here
              </Text>
            </Pressable>
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.login}
            placeholder="Username or Email"
            placeholderTextColor="rgba(255, 255,255, 0.7)"
            keyboardAppearance="dark" //bunu cihazın temasına göre otomatik algılayacak bir sisteme bak.
          />
          <TextInput
            style={styles.login}
            placeholder="Password"
            placeholderTextColor="rgba(255, 255,255, 0.7)"
            keyboardAppearance="dark" //bunu cihazın temasına göre otomatik algılayacak bir sisteme bak.
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </View>

        <View
          style={{
            width: "80%",
          }}
        >
          <Pressable onPress={() => Alert.alert("recovery password desune")}>
            <Text
              style={{
                color: "#D029B6",
                padding: 5,
              }}
            >
              Recovery Password
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => Alert.alert("Log in button ke")}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "85%" }}
        >
          <View style={styles.line} />
          <Text style={{ color: "#fff", padding: 15 }}>Or</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Pressable
            style={styles.googleLogInButton}
            onPress={() => Alert.alert("google log in")}
          >
            <Text style={styles.googleLogInText}>Goo</Text>
          </Pressable>
          <Pressable
            style={styles.googleLogInButton}
            onPress={() => Alert.alert("IOS log in")}
          >
            <Text style={styles.googleLogInText}>IOS</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </HideKeyboard>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0a0a",
    textAlign: "left",
    alignItems: "center",
    height: "100%",
  },
  login: {
    minWidth: "85%",
    height: 70,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    borderColor: "rgba(255, 255,255, 0.1)",
    color: "#fff",
  },
  signInButton: {
    color: "#D029B6",
    backgroundColor: "#D029B6",
    borderRadius: 20,
    margin: 5,
    minWidth: "85%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  signInButtonText: { color: "#fff", fontSize: 25, fontWeight: "bold" },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255,255, 0.4)",
    color: "#fff",
  },
  googleLogInButton: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#D029B6",
    margin: 15,
  },
});

export default LoginScreen;
