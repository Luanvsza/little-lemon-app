# Little Lemon – React Native App

## Project Description

**Little Lemon** is a restaurant app developed with **React Native** using **Expo**. It simulates a bistro experience, allowing users to:

- Browse the restaurant menu.  
- Subscribe to the Little Lemon newsletter.  
- Interact with a modern, intuitive, and responsive interface.

The app demonstrates **native navigation concepts**, **UI components**, **form handling with validation**, and **image and style usage** in React Native.

---

## Features

- **Login Screen:**  
  - Users can enter email and password.  
  - "Login" button navigates to the main menu.  

- **Drawer Navigation:**  
  - Hamburger menu for accessing screens:  
    - **Welcome**  
    - **Menu**  
    - **Subscribe**  

- **Welcome Screen:**  
  - Displays the Little Lemon logo, a restaurant description, and buttons to access the menu and newsletter.  

- **Menu Screen:**  
  - Shows the dishes and items available at the restaurant (static example, can be expanded).  

- **Subscribe Screen:**  
  - Users can enter their email to subscribe to the newsletter.  
  - Subscribe button is only enabled when an email is entered.  
  - Subscription confirmation is displayed via an alert.

- **Image Usage:**  
  - Little Lemon logo is displayed on both the Welcome and Subscribe screens.  

- **Responsiveness & Accessibility:**  
  - `KeyboardAvoidingView` is used for input handling on iOS/Android.  
  - Styles adapt to light/dark mode and different screen sizes.  

---

## Technologies & Libraries

- **React Native**  
- **Expo**  
- **React Navigation**  
  - Drawer Navigation (`@react-navigation/drawer`)  
  - Native Stack Navigation (`@react-navigation/native-stack`)  
- **React Hooks:** `useState`, `useEffect`  
- **React Native Components:** `View`, `Text`, `ScrollView`, `Image`, `Pressable`, `TextInput`  

---

## How to Run the Project

1. Clone the repository:  
```bash
git clone <REPOSITORY_URL>
Enter the project folder:
cd react-little-lemon-restaurant-app-main
Install dependencies:
npm install
Run the project using Expo:
npx expo start
Open on a device:
Using Expo Go (iOS/Android) via QR code
Or in a local simulator/emulator
Project Structure
react-little-lemon-restaurant-app-main/
│
├── App.js
├── package.json
├── package-lock.json
├── src/
│   ├── screens/
│   │   ├── WelcomeScreen.js
│   │   ├── MenuScreen.js
│   │   ├── SubscribeScreen.js
│   │   └── LoginScreen.js
│   ├── navigators/
│   │   ├── RootNavigator.js
│   │   └── DrawerNavigator.js
│   └── assets/
│       └── logo_lemon.png
Notes
The app is a demonstration version, focused on UI, navigation, and interactivity.
For real newsletter functionality, a backend or email service integration is required.
All styles are organized using StyleSheet for better maintainability and performance.
Author
Luan Viana – Developer and creator of the Little Lemon app
