import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            style={styles.button}
            onPress={() => navigation.replace("MainDrawer")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#373938ff", padding: 20 },
  headerText: { fontSize: 30, textAlign: "center", color: "#EDEFEE", paddingVertical: 40 },
  regularText: { fontSize: 24, textAlign: "center", color: "#EDEFEE", paddingBottom: 20 },
  inputContainer: { alignItems: "center" },
  inputText: { width: "80%", height: 40, backgroundColor: "#EDEFEE", marginVertical: 10, paddingHorizontal: 10 },
  button: { marginTop: 20, backgroundColor: "#e3fa35ff", padding: 10, borderRadius: 5, width: "50%", alignItems: "center" },
  buttonText: { fontWeight: "bold", fontSize: 18 },
});
