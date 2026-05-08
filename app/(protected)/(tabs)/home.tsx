import { Package } from "lucide-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const LOGO_IMAGE = require("../../../assets/images/logo_cpap_2025_2.png");

const PRIMARY_COLOR = "#202057"; // rgb(32, 32, 87)

export default function Dashboard() {
  const [cartCount, setCartCount] = useState(0);

  const previousOrders = [
    {
      id: "1",
      name: "AirFit N20 Nasal Mask",
      price: 89.99,
      lastOrdered: "March 2026",
      image: "mask",
      color: "#3b82f6", // blue
    },
    {
      id: "2",
      name: "Disposable Filters (6-pack)",
      price: 24.99,
      lastOrdered: "February 2026",
      image: "filters",
      color: "#10b981", // green
    },
    {
      id: "3",
      name: "Heated Tubing",
      price: 45.99,
      lastOrdered: "January 2026",
      image: "tubing",
      color: "#a855f7", // purple
    },
    {
      id: "4",
      name: "Mask Cushion Replacement",
      price: 34.99,
      lastOrdered: "March 2026",
      image: "cushion",
      color: "#f97316", // orange
    },
  ];

  const handleQuickOrder = (itemName: string) => {
    setCartCount((prev) => prev + 1);
    console.log(`Added ${itemName} to cart`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Main Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Membership Badge */}
        <View style={styles.membershipCard}>
          <View style={styles.membershipIcon}>
            <Text style={{ fontSize: 24 }}>⭐</Text>
          </View>
          <View>
            <Text style={styles.membershipTitle}>Free Member</Text>
            <Text style={styles.membershipSub}>
              Enjoying member-only prices
            </Text>
          </View>
        </View>

        {/* Previously Ordered Section */}
        <Text style={styles.sectionTitle}>Previously Ordered</Text>

        {previousOrders.map((item) => (
          <View key={item.id} style={styles.orderCard}>
            <View style={styles.orderInfoRow}>
              <View
                style={[styles.iconBox, { backgroundColor: `${item.color}15` }]}
              >
                <Package size={32} color={item.color} />
              </View>
              <View style={styles.orderTextDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.lastOrdered}>
                  Last ordered: {item.lastOrdered}
                </Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.reorderButton}
              onPress={() => handleQuickOrder(item.name)}
            >
              <Text style={styles.reorderButtonText}>Quick Reorder</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 24,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  logo: {
    height: 40,
    width: 120,
  },
  cartButton: {
    padding: 4,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#ef4444",
    borderRadius: 10,
    height: 18,
    width: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  welcomeSection: {
    marginBottom: 10,
  },
  welcomeBack: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
  },
  userName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 100, // Extra space for bottom nav
  },
  membershipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef9c3", // yellow-100
    borderWidth: 1,
    borderColor: "#fde047", // yellow-300
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  membershipIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#facc15", // yellow-400
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  membershipTitle: {
    fontWeight: "600",
    color: "#713f12",
    fontSize: 16,
  },
  membershipSub: {
    fontSize: 13,
    color: "#a16207",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  orderInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  orderTextDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "600",
    fontSize: 14,
    color: "#1f2937",
    marginBottom: 4,
  },
  lastOrdered: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: PRIMARY_COLOR,
  },
  reorderButton: {
    backgroundColor: PRIMARY_COLOR,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  reorderButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingBottom: 30, // For home indicator on iPhone
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  navItem: {
    alignItems: "center",
    gap: 4,
  },
  navText: {
    fontSize: 10,
    color: "#9ca3af",
    fontWeight: "500",
  },
});
