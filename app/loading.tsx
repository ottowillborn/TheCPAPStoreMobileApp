import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoadingScreen() {
  const pulseAnim = useRef(new Animated.Value(0.6)).current;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.8,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.6,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();

    return () => animation.stop();
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: pulseAnim,
          transform: [{ scale: pulseAnim }],
          marginBottom: insets.bottom + 40,
        }}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.logo}
          resizeMode="cover" // Changed to cover to ensure the image fills the circle
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
    borderRadius: 64, // Exactly half of width/height
    borderWidth: 1, // Optional: adds a slight border if needed
    borderColor: "#333", // Optional: subtle ring around the logo
  },
});
