import { Tabs } from "expo-router";
import { Moon, ShoppingBag, ShoppingCart, User } from "lucide-react-native";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#323287",
        tabBarInactiveTintColor: "#717171",
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 55, // Match this to tabBarStyle height for perfect centering
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "For You",
          tabBarIcon: ({ color, focused }) => (
            <Moon
              size={18}
              color={color}
              fill={focused ? "#323287c4" : "none"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "Shop",
          tabBarIcon: ({ color, focused }) => (
            <ShoppingBag
              size={18}
              color={color}
              fill={focused ? "#323287c4" : "none"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <ShoppingCart
              size={18}
              color={color}
              fill={focused ? "#323287c4" : "none"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <User
              size={18}
              color={color}
              fill={focused ? "#323287c4" : "none"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 30,

    marginHorizontal: 20,

    height: 50,
    borderRadius: 30,

    backgroundColor: "#fff",
    borderTopWidth: 0,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,

    paddingBottom: 0,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: -4,
  },
});
