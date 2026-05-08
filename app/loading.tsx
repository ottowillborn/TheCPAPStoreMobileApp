import { Moon } from "lucide-react-native";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoadingScreen() {
  const pulseAnim = useRef(new Animated.Value(0.6)).current;
  // Use insets to ensure the icon doesn't overlap with home indicators
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
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
          // Applies safe area padding + extra spacing from the bottom
          marginBottom: insets.bottom + 40,
        }}
      >
        <Moon size={64} color="#fff" strokeWidth={2} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // push content to the bottom
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
