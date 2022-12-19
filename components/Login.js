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
} from "react-native";
const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
function Login() {
  return (
    <HideKeyboard>
      <ScrollView>
        <View style={styles.container}>
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

          <Text
            style={{
              fontSize: 45,
              color: "#fff",
              justifyContent: "center",
              alignItems: "center",
              margin: 15,
            }}
          >
            Sign In
          </Text>
          <Text style={{ color: "#fff", margin: 25 }}>
            If You Need Any Support{" "}
            <Pressable
              onPress={() => Alert.alert("Log in button ke")}
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <Text
                style={{
                  color: "#D029B6",
                }}
              >
                Click Here
              </Text>
            </Pressable>
          </Text>

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

          <View>
            <Pressable
              onPress={() => Alert.alert("recovery password desune")}
              style={{
                textAlign: "left",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  color: "#D029B6",
                  textAlign: "left",
                  justifyContent: "flex-start",
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
        </View>
      </ScrollView>
    </HideKeyboard>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    backgroundColor: "#0000",
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
    color: "#f194ff",
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

export default Login;