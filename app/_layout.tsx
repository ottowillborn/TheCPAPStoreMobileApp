import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(protected)/(tabs)"
          options={{
            headerShown: false,
            animation: "fade",
            animationDuration: 500,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
