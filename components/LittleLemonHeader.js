import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingTop: 20,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
        numberOfLines={1}
      >
        Little Lemon
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({ 
  container: {
paddingVertical: 20, 
backgroundColor: "#e98f4fff"
  }
});