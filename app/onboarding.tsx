import { Asset } from "expo-asset";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LoadingScreen from "./loading";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const SLIDES = [
  {
    id: "1",
    title: "Your History,\nIntegrated",
    subtitle:
      "We've automatically synced your previous orders and exact mask sizes.",
    image: require("@/assets/images/dune.jpg"),
  },
  {
    id: "2",
    title: "Zero-Search\nInterface",
    subtitle:
      "Your essential setup appears on the home screen the moment you need a replenishment.",
    image: require("@/assets/images/crescentmoon.jpg"),
  },
  {
    id: "3",
    title: "One-Tap\nReordering",
    subtitle:
      "Skip the checkout lines. Reorder your therapy essentials in under thirty seconds.",
    image: require("@/assets/images/goodsleep.jpg"),
  },
];

export default function PostLoginSlideshow() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();

  const finishOnboarding = async () => {
    setIsTransitioning(true);

    try {
      // PRELOAD HOME IMAGE
      await Asset.fromModule(
        require("@/assets/images/goodsleep.jpg"),
      ).downloadAsync();

      // Artificial delay to allow the animation to play out
      setTimeout(() => {
        router.replace("/(protected)/(tabs)/home");
      }, 2000);
    } catch (e) {
      console.warn("Failed to preload assets", e);
      router.replace("/(protected)/(tabs)/home");
    }
  };

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      finishOnboarding();
    }
  };

  if (isTransitioning) return <LoadingScreen />;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0)
            setCurrentIndex(viewableItems[0].index || 0);
        }}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <ImageBackground source={item.image} style={styles.backgroundImage}>
              <View
                style={[styles.overlay, { paddingBottom: insets.bottom + 120 }]}
              >
                <View style={styles.accentBar} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />

      <View style={[styles.topNav, { top: insets.top + 20 }]}>
        <View style={styles.pagination}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={finishOnboarding}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.footer, { bottom: insets.bottom + 40 }]}>
        <TouchableOpacity style={styles.mainButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === SLIDES.length - 1 ? "ENTER SHOP" : "CONTINUE"}
          </Text>
          <ArrowRight size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 24,
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 3,
    opacity: 0.8,
  },
  slide: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
  backgroundImage: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  topNav: {
    position: "absolute",
    left: 30,
    right: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  accentBar: {
    width: 40,
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "300",
    color: "#fff",
    lineHeight: 48,
    letterSpacing: -1,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    lineHeight: 24,
    maxWidth: "85%",
  },
  pagination: { flexDirection: "row", gap: 8 },
  dot: { height: 2, borderRadius: 1 },
  activeDot: { width: 24, backgroundColor: "#fff" },
  inactiveDot: { width: 12, backgroundColor: "rgba(255,255,255,0.3)" },
  skipText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },
  footer: { position: "absolute", left: 30, right: 30, zIndex: 10 },
  mainButton: {
    backgroundColor: "#fff",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
  },
});
