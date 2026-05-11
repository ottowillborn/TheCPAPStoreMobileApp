import { router } from "expo-router";
import {
  ArrowLeft,
  ChevronRight,
  CreditCard,
  HelpCircle,
  LogOut,
  MapPin,
  Package,
  Settings,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Pulling dynamic app info
import appConfig from "../../../app.json";

type SectionId =
  | "orders"
  | "profile"
  | "address"
  | "payment"
  | "settings"
  | "support"
  | null;

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState<SectionId>(null);

  const appVersion = appConfig.expo.version;
  const appName = appConfig.expo.name;
  const userName = "John Doe"; // Placeholder for user name, can be dynamic in the future

  const MENU_ITEMS = [
    {
      id: "orders",
      label: "Order History",
      icon: <Package size={20} color="#000" />,
    },
    {
      id: "profile",
      label: "Personal Information",
      icon: <User size={20} color="#000" />,
    },
    {
      id: "address",
      label: "Shipping Addresses",
      icon: <MapPin size={20} color="#000" />,
    },
    {
      id: "payment",
      label: "Payment Methods",
      icon: <CreditCard size={20} color="#000" />,
    },
    {
      id: "settings",
      label: "App Settings",
      icon: <Settings size={20} color="#000" />,
    },
    {
      id: "support",
      label: "Support & Help",
      icon: <HelpCircle size={20} color="#000" />,
    },
  ];

  // Internal component for the detailed view of each section
  const DetailView = ({ id }: { id: SectionId }) => {
    const section = MENU_ITEMS.find((m) => m.id === id);

    return (
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{section?.label}</Text>

        <View style={styles.contentPlaceholder}>
          <Text style={styles.placeholderText}>
            No {section?.label?.toLowerCase()} information to display yet.
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Dynamic Header: changes title based on whether you are in a sub-section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.sectionLabel}>
            {activeSection ? "DETAILS" : "ACCOUNT"}
          </Text>
          <Text style={styles.title}>
            {activeSection
              ? MENU_ITEMS.find((m) => m.id === activeSection)?.label
              : userName}
          </Text>
          {activeSection ? (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setActiveSection(null)}
            >
              <ArrowLeft size={18} color="#000" />
              <Text style={styles.backText}>Back to Account</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {activeSection ? (
        <DetailView id={activeSection} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.menuSection}>
            <Text style={styles.menuGroupLabel}>ACTIVITY & SETTINGS</Text>
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => setActiveSection(item.id as SectionId)}
              >
                <View style={styles.menuItemLeft}>
                  {item.icon}
                  <Text style={styles.menuItemText}>{item.label}</Text>
                </View>
                <ChevronRight size={18} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => router.replace("/")}
          >
            <LogOut size={18} color="#FF3B30" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>

          <Text style={styles.versionText}>
            {appName} v{appVersion}
          </Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#999",
    marginBottom: 4,
  },
  title: { fontSize: 28, fontWeight: "400", color: "#000" },
  scrollContent: { paddingBottom: 100 },
  menuSection: { marginTop: 20 },
  menuGroupLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#000",
    paddingHorizontal: 24,
    marginBottom: 10,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  menuItemLeft: { flexDirection: "row", alignItems: "center", gap: 15 },
  menuItemText: { fontSize: 16, color: "#333", fontWeight: "400" },

  // Detailed Section Styles
  detailContainer: { flex: 1, padding: 24 },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
  },
  backText: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#000",
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 16,
    color: "#000",
  },
  contentPlaceholder: {
    flex: 1,
    maxHeight: 300,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderStyle: "dashed",
    borderRadius: 12,
  },
  placeholderText: { color: "#999", fontSize: 14 },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 40,
    marginHorizontal: 24,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  logoutText: { color: "#FF3B30", fontWeight: "600", fontSize: 15 },
  versionText: {
    textAlign: "center",
    color: "#bbb",
    fontSize: 12,
    marginTop: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
