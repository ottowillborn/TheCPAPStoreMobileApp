import SearchHeader from "@/app/components/SearchHeader";
import { Plus } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const DUMMY_REORDERS = [
  {
    id: "1",
    title: "AirMini™ Tubing",
    sub: "Flexible, lightweight, and essential.",
    price: "$50.00 CAD",
    image: require("@/assets/images/airminitubing.png"),
  },
  {
    id: "2",
    title: "Standard HumidX™",
    sub: "Waterless humidification for travel.",
    price: "$50.00 CAD",
    image: require("@/assets/images/humidx.png"),
  },
  {
    id: "3",
    title: "Lunar Tube Adapter",
    sub: "Seamless connection for your setup.",
    price: "$27.00 CAD",
    image: require("@/assets/images/lunartubeadapter.png"),
  },
];

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <SearchHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ImageBackground
          source={require("@/assets/images/goodsleep.jpg")}
          style={styles.heroFrame}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Product{"\n"}Replenishment</Text>
            <Text style={styles.heroSub}>
              Easily reorder your CPAP essentials in just one tap.
            </Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>Shop All</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.sectionDivider}>
          <Text style={styles.sectionLabel}>PREVIOUSLY ORDERED</Text>
        </View>

        {DUMMY_REORDERS.map((item) => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={styles.adaptiveImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productSub}>{item.sub}</Text>

              <View style={styles.priceRow}>
                <Text style={styles.priceText}>{item.price}</Text>
                <TouchableOpacity style={styles.quickAddButton}>
                  <Plus size={16} color="#fff" />
                  <Text style={styles.quickAddText}>Quick Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroFrame: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.7,
    justifyContent: "flex-end",
  },
  heroOverlay: {
    padding: 30,
    paddingBottom: 60,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "300",
    lineHeight: 46,
    marginBottom: 15,
  },
  heroSub: {
    color: "#fff",
    fontSize: 17,
    marginBottom: 25,
    lineHeight: 24,
  },
  heroButton: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  heroButtonText: {
    color: "#000",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: 1,
  },
  sectionDivider: {
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#000",
    textAlign: "center",
  },
  productSection: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 40,
    marginBottom: 40,
    // The sleek gray divider line
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  imageContainer: {
    width: "100%",
    height: 350,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  adaptiveImage: {
    width: "100%",
    height: "100%",
  },
  productDetails: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  productTitle: {
    color: "#000",
    fontSize: 28,
    fontWeight: "400",
    marginBottom: 4,
  },
  productSub: {
    color: "#666",
    fontSize: 15,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
  quickAddButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    gap: 6,
  },
  quickAddText: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: 1,
  },
});
