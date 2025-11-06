import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
  TextInput,
  Pressable,
  Image,
} from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const Item = ({ name }) => {
  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.itemText}>{name}</Text>
    </View>
  );
};
const Separator = () => <View style={menuStyles.seperator} />;
const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;
const Footer = () => <Text style={menuStyles.footerText}>End of Menu</Text>;
const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.headerText}>{title}</Text>
  );
  const [showMenu, setShowMenu] = useState(false);
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <View style={styles.container}>
      {/* <ScrollView
        indicatorStyle={"white"}
        horizontal={false}
        style={menuStyles.innerContainer}
      > */}

      {/* <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}

      /> */}
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../img/lemon.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon"}
      />
     
      <Pressable
        style={menuStyles.button}
        onPress={() => setShowMenu((prevState) => !prevState)}
      >
        <Text style={menuStyles.buttonText}>
          {showMenu ? "Hide Menu" : "View Menu"}
        </Text>
          
      </Pressable>
 {showMenu && <Image
        resizeMode="stretch"
        style={styles.image}
        source={require("../img/food2.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon"}
      />}
      {showMenu && (
        <SectionList
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        />
      )}
     
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
     backgroundColor: "#373938ff",
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10 ,
    borderColor: "green",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 40,
    backgroundColor: green,
  },
  headerText: {
    fontSize: 40,
    flexWrap: "wrap",
    color: "black",
    textAlign: "center",
    backgroundColor: yellow,
  },
  itemText: {
    fontSize: 30,
    flexWrap: "wrap",
    color: "yellow",
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: "white",
  },
  footerText: {
    color: "white",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
