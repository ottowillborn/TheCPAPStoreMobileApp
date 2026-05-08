import { router, Tabs, usePathname } from "expo-router";
import { Home, Menu, ShoppingCart, User } from "lucide-react-native";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PRIMARY_COLOR = "#202057";
const LOGO_IMAGE = require("../../../assets/images/logo_cpap_2025_2.png");

export default function TabLayout() {
  const pathname = usePathname();
  const isHome = pathname.includes("/home");
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* GLOBAL HEADER: Shown on all tabs */}
      <View style={styles.header}>
        <SafeAreaView>
          <View style={styles.headerTop}>
            <Image
              source={LOGO_IMAGE}
              style={styles.logo}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => router.push("/cart")}
            >
              <ShoppingCart size={24} color="#fff" />
              {/* Note: You can connect this to a global state/Context later */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* WELCOME SECTION: Only shows if isHome is true */}
          {isHome && (
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeBack}>Welcome back,</Text>
              <Text style={styles.userName}>John</Text>
            </View>
          )}
        </SafeAreaView>
      </View>

      {/* TAB NAVIGATION */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: PRIMARY_COLOR,
          tabBarInactiveTintColor: "#9ca3af",
          headerShown: false, // We use our custom header above instead
          tabBarStyle: {
            height: 90,
            paddingBottom: 30,
            paddingTop: 10,
            borderTopWidth: 1,
            borderTopColor: "#f3f4f6",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarIcon: ({ color }) => <Menu size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => <ShoppingCart size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => <User size={24} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 24,
    paddingBottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
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
});
