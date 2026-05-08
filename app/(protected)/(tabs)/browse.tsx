import SearchHeader from "@/app/components/SearchHeader";
import { ChevronDown, ChevronRight, Plus } from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Organized filter data based on your requirements
const FILTER_DATA = {
  Machines: [
    { label: "Machines", isHeader: true },
    { label: "APAP & Auto Adjusting" },
    { label: "Bilevel & BiPAP" },
    { label: "CPAP & Fixed Pressure" },
    { label: "Travel Ready" },
    { label: "Oxygen Concentrators" },
    { label: "Machine Accessories", isHeader: true },
    { label: "Tubing & Hoses" },
    { label: "Water Chambers" },
    { label: "CPAP Filters" },
    { label: "Travel Parts" },
    { label: "Batteries & Power" },
  ],
  Masks: [
    { label: "Masks by brand", isHeader: true },
    { label: "ResMed" },
    { label: "Fisher & Paykel" },
    { label: "Philips Respironics" },
    { label: "CPAP Masks", isHeader: true },
    { label: "Full Face" },
    { label: "Nasal" },
    { label: "Nasal Pillow" },
    { label: "For Her" },
    { label: "AirMini Masks" },
    { label: "Mask Accessories", isHeader: true },
    { label: "Headgear" },
    { label: "Cushions" },
    { label: "Other Mask Parts" },
  ],
  Supplies: [
    { label: "Supplies", isHeader: true },
    { label: "Tubes" },
    { label: "Water Chambers" },
    { label: "Filters" },
    { label: "Power Supply" },
    { label: "Comfort", isHeader: true },
    { label: "Batteries" },
    { label: "CPAP Pillows" },
    { label: "Chinstraps" },
    { label: "Bags & Cases" },
    { label: "Cleaning", isHeader: true },
    { label: "Soap and Disinfection" },
    { label: "Cleaning Wipes" },
  ],
  Oxygen: [
    { label: "Portable Oxygen Concentrators" },
    { label: "Stationary Concentrators" },
    { label: "Oxygen Supplies" },
  ],
};

const BROWSE_ITEMS = [
  {
    id: "1",
    title: "AirMini™ Tubing",
    price: "$50.00 CAD",
    image: require("@/assets/images/airminitubing.png"),
  },
  {
    id: "2",
    title: "Standard HumidX™",
    price: "$50.00 CAD",
    image: require("@/assets/images/humidx.png"),
  },
  {
    id: "3",
    title: "Lunar Tube Adapter",
    price: "$27.00 CAD",
    image: require("@/assets/images/lunartubeadapter.png"),
  },
  {
    id: "4",
    title: "AirMini™ Tubing",
    price: "$50.00 CAD",
    image: require("@/assets/images/airminitubing.png"),
  },
  {
    id: "5",
    title: "Standard HumidX™",
    price: "$50.00 CAD",
    image: require("@/assets/images/humidx.png"),
  },
  {
    id: "6",
    title: "Lunar Tube Adapter",
    price: "$27.00 CAD",
    image: require("@/assets/images/lunartubeadapter.png"),
  },
  {
    id: "7",
    title: "AirMini™ Tubing",
    price: "$50.00 CAD",
    image: require("@/assets/images/airminitubing.png"),
  },
  {
    id: "8",
    title: "Standard HumidX™",
    price: "$50.00 CAD",
    image: require("@/assets/images/humidx.png"),
  },
  {
    id: "9",
    title: "Lunar Tube Adapter",
    price: "$27.00 CAD",
    image: require("@/assets/images/lunartubeadapter.png"),
  },
];

export default function BrowsePage() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={14} color="#fff" />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.headerAnchor}>
        <SearchHeader />
      </View>

      <View style={styles.dropdownRow}>
        {Object.keys(FILTER_DATA).map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.dropdownTrigger,
              activeTab === cat && styles.activeTrigger,
            ]}
            onPress={() => toggleTab(cat)}
          >
            <Text style={styles.dropdownLabel} numberOfLines={1}>
              {cat}
            </Text>
            <ChevronDown
              size={12}
              color={activeTab === cat ? "#000" : "#666"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Expanded Menu View */}
      {activeTab && (
        <View style={styles.expandedMenu}>
          <ScrollView style={styles.menuScroll} bounceless={true}>
            {FILTER_DATA[activeTab].map((option, index) =>
              option.isHeader ? (
                <View key={index} style={styles.menuHeader}>
                  <Text style={styles.menuHeaderText}>{option.label}</Text>
                </View>
              ) : (
                <TouchableOpacity
                  key={index}
                  style={styles.menuOption}
                  onPress={() => setActiveTab(null)}
                >
                  <Text style={styles.menuOptionText}>{option.label}</Text>
                  <ChevronRight size={14} color="#ccc" />
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
          <TouchableOpacity
            style={styles.menuOverlay}
            onPress={() => setActiveTab(null)}
          />
        </View>
      )}

      <FlatList
        data={BROWSE_ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerAnchor: { height: 65, zIndex: 20 },
  dropdownRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 10,
    justifyContent: "space-between",
    gap: 8,
    zIndex: 20,
    backgroundColor: "#fff",
  },
  dropdownTrigger: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 20,
    paddingVertical: 8,
    gap: 2,
  },
  activeTrigger: {
    borderColor: "#000",
    backgroundColor: "#f0f0f0",
  },
  dropdownLabel: { fontSize: 12, fontWeight: "500", color: "#333" },

  // Expanded Menu Styles
  expandedMenu: {
    position: "absolute",
    top: 155, // Adjust based on your header + dropdownRow height
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 15,
  },
  menuScroll: {
    backgroundColor: "#fff",
    maxHeight: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuHeader: {
    backgroundColor: "#f8f8f8",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuHeaderText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  menuOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f9f9f9",
  },
  menuOptionText: { fontSize: 14, color: "#333" },
  menuOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.2)" },

  listContent: { paddingHorizontal: 15, paddingBottom: 40 },
  columnWrapper: { justifyContent: "space-between" },
  card: {
    width: "48%",
    marginTop: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    overflow: "hidden",
  },
  imageWrapper: {
    width: "100%",
    height: 160,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  productImage: { width: "100%", height: "100%" },
  infoContainer: { padding: 12 },
  productTitle: { fontSize: 14, fontWeight: "600", color: "#000" },
  priceText: { fontSize: 13, color: "#666", marginVertical: 6 },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
