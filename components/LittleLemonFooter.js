import * as React from "react";
import { View, Text,StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.footerText}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
     backgroundColor: "#e98f4fff",
        marginBottom: 10
    },
    footerText:{
        fontStyle: "italic",
         fontSize: 18,
          color: "black",
          textAlign: "center"
    }
});
