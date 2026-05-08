import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/login_screen";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <LoginScreen />
      </SafeAreaProvider>
    </>
  );
}
