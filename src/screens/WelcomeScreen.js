import * as React from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerSection}>
        <Image
          style={styles.logo}
          source={require("../../img/logo_lemon.png")}
        />
        <Text style={styles.welcomeText}>Welcome to Little Lemon</Text>
      </View>

      <Text style={styles.descriptionText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment.
      </Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#373938ff" },
  headerSection: { alignItems: "center", marginBottom: 20 },
  logo: { width: 100, height: 100, borderRadius: 20, marginBottom: 10 },
  welcomeText: { fontSize: 32, color: "#EDEFEE", textAlign: "center", marginBottom: 10 },
  descriptionText: { fontSize: 18, color: "#c7d252ff", textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "#b2ec86ff", padding: 15, borderRadius: 10, marginVertical: 10, width: "60%", alignItems: "center" },
  buttonText: { fontSize: 18, fontWeight: "bold", color: "#333333" },
});
