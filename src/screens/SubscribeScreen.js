import * as React from "react";
import { View, Text, TextInput, Pressable, Alert, Image, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

export default function SubscribeScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    Alert.alert("Subscribed!", `You have subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../img/logo_lemon.png")}
      />
      <Text style={styles.headerText}>Subscribe to our Newsletter</Text>
      <Text style={styles.descriptionText}>
        Enter your email to stay updated with Little Lemon offers.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Pressable
        style={[styles.button, { opacity: email ? 1 : 0.5 }]}
        onPress={handleSubscribe}
        disabled={!email}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.backButton]} onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.buttonText}>Back to Welcome</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#373938ff" },
  logo: { width: 100, height: 100, borderRadius: 20, marginBottom: 20 },
  headerText: { fontSize: 28, color: "#EDEFEE", textAlign: "center", marginBottom: 10 },
  descriptionText: { fontSize: 18, color: "#c7d252ff", textAlign: "center", marginBottom: 20 },
  input: { width: "80%", height: 40, backgroundColor: "#EDEFEE", borderRadius: 8, paddingHorizontal: 10, marginBottom: 20 },
  button: { backgroundColor: "#b2ec86ff", padding: 15, borderRadius: 10, alignItems: "center", marginVertical: 10, width: "60%" },
  backButton: { backgroundColor: "#e3fa35ff" },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#333333" },
});
