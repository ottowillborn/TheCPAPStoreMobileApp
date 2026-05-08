import { Tabs } from "expo-router";
import { Home, Menu, ShoppingCart, User, Users } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

const PRIMARY_COLOR = "#202057";

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#717171",
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "For You",
            tabBarIcon: ({ color }) => <Home size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Shop",
            tabBarIcon: ({ color }) => <Menu size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="members"
          options={{
            title: "Members",
            tabBarIcon: ({ color }) => <Users size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Store",
            tabBarIcon: ({ color }) => <ShoppingCart size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => <User size={22} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    height: 65,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    borderTopWidth: 0,
    // Shadow for the floating effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    paddingBottom: 0, // Reset default padding
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 8,
  },
});
