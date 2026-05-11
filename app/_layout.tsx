import LiveChat from "@/app/components/LiveChat";
import { CartProvider } from "@/context/CartContext";
import { SupportProvider, useSupport } from "@/context/SupportContext";
import { Stack } from "expo-router";
import React from "react";
import {
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

function RootLayoutContent() {
  const { slideAnim } = useSupport();

  return (
    <View style={styles.rootContainer}>
      <Animated.View
        style={[
          styles.slidingWrapper,
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        {/* MAIN APP AREA */}
        <View style={styles.screenArea}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="(protected)/(tabs)"
              options={{ animation: "fade" }}
            />
          </Stack>
        </View>

        {/* LIVE SUPPORT AREA */}
        <LiveChat />
      </Animated.View>
    </View>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SupportProvider>
        <CartProvider>
          <StatusBar />
          <RootLayoutContent />
        </CartProvider>
      </SupportProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#000",
    overflow: "hidden",
  },
  slidingWrapper: {
    flexDirection: "row",
    width: SCREEN_WIDTH + SCREEN_WIDTH * 0.9, // Full width + Drawer width
    flex: 1,
  },
  screenArea: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
});
