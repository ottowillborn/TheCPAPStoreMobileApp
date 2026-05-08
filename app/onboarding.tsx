import { router } from "expo-router";
import {
  ArrowRight,
  History,
  LucideIcon,
  Package,
  Zap,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface Slide {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  showDemo: "history" | "product" | null;
}

const SLIDES: Slide[] = [
  {
    id: "1",
    title: "Your History, Integrated",
    description:
      "We've automatically synced your previous orders and exact mask sizes.",
    icon: History,
    color: "#202057",
    showDemo: null,
  },
  {
    id: "2",
    title: "Zero-Search Interface",
    description:
      "Your setup appears right on the home screen the moment you need a replenishment.",
    icon: Package,
    color: "#3b82f6",
    showDemo: "history",
  },
  {
    id: "3",
    title: "One-Tap Reordering",
    description:
      "Skip the checkout lines. Reorder your essentials in under 30 seconds.",
    icon: Zap,
    color: "#10b981",
    showDemo: "product",
  },
];

export default function PostLoginSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      router.replace("/(protected)/(tabs)/home");
    }
  };

  const handleSkip = () => router.replace("/(protected)/(tabs)/home");

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const renderSlide = ({ item }: { item: Slide }) => {
    const IconComponent = item.icon;
    return (
      <View style={styles.slide}>
        <View
          style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}
        >
          <IconComponent size={60} color={item.color} strokeWidth={1.5} />
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {item.showDemo === "history" && (
          <View style={styles.demoWrapper}>
            <View style={styles.demoCard}>
              <View style={styles.demoRow}>
                <View style={[styles.miniIcon, { backgroundColor: "#dbeafe" }]}>
                  <Package size={20} color="#2563eb" />
                </View>
                <View>
                  <Text style={styles.demoMainText}>AirFit N20 Mask</Text>
                  <Text style={styles.demoSubText}>Last ordered: Mar 2026</Text>
                </View>
              </View>
              <View style={styles.demoRow}>
                <View style={[styles.miniIcon, { backgroundColor: "#dcfce7" }]}>
                  <Package size={20} color="#16a34a" />
                </View>
                <View>
                  <Text style={styles.demoMainText}>Filters (6-pack)</Text>
                  <Text style={styles.demoSubText}>Last ordered: Feb 2026</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {item.showDemo === "product" && (
          <View style={styles.demoWrapper}>
            <View style={styles.productCard}>
              <View style={styles.demoRow}>
                <View
                  style={[
                    styles.miniIcon,
                    { backgroundColor: "#dbeafe", width: 50, height: 50 },
                  ]}
                >
                  <Package size={28} color="#2563eb" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.demoMainText}>AirFit N20 Mask</Text>
                  <Text style={styles.demoSubText}>$89.99</Text>
                </View>
              </View>
              <View style={styles.miniButton}>
                <Text style={styles.miniButtonText}>Add to Cart</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Fixed Height to prevent jumping */}
      <View style={styles.header}>
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

        {/* Render an empty view of the same width if Skip is hidden to maintain spacing */}
        {currentIndex < SLIDES.length - 1 ? (
          <TouchableOpacity
            onPress={handleSkip}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>

      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        keyExtractor={(item) => item.id}
        renderItem={renderSlide}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {currentIndex === SLIDES.length - 1 ? "Get Started" : "Next"}
          </Text>
          <ArrowRight size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    height: 60,
    alignItems: "center",
  },
  slide: {
    width: width,
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#202057",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  demoWrapper: {
    width: "100%",
    marginTop: 10,
  },
  demoCard: {
    backgroundColor: "#f9fafb",
    borderRadius: 20,
    padding: 12,
    gap: 10,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  demoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    gap: 12,
  },
  miniIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  demoMainText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
  },
  demoSubText: {
    fontSize: 12,
    color: "#6b7280",
  },
  miniButton: {
    backgroundColor: "#202057",
    borderRadius: 10,
    height: 40,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  miniButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  pagination: {
    flexDirection: "row",
    gap: 6,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 30,
    backgroundColor: "#202057",
  },
  inactiveDot: {
    width: 8,
    backgroundColor: "#e5e7eb",
  },
  skipText: {
    color: "#6b7280",
    fontSize: 14,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#202057",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 16,
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
