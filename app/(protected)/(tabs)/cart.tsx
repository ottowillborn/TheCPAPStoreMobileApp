import { CartItem, useCart } from "@/context/CartContext";
import { Minus, Plus } from "lucide-react-native";
import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, totalItems } = useCart();

  const renderItem: ListRenderItem<CartItem> = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.itemImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.itemInfo}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>

        <View style={styles.itemFooter}>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              onPress={() => removeFromCart(item.id)}
              style={styles.qtyBtn}
            >
              <Minus size={14} color="#000" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => addToCart(item)}
              style={styles.qtyBtn}
            >
              <Plus size={14} color="#000" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => removeFromCart(item.id)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <View>
          <Text style={styles.sectionLabel}>SHOPPING CART</Text>
          <Text style={styles.title}>{totalItems} Items</Text>
        </View>

        {cart.length > 0 && (
          <TouchableOpacity style={styles.headerCheckoutButton}>
            <Text style={styles.headerCheckoutText}>Checkout</Text>
          </TouchableOpacity>
        )}
      </View>

      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is currently empty.</Text>
          <TouchableOpacity style={styles.shopAllButton}>
            <Text style={styles.shopAllText}>Shop All Products</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
  headerCheckoutButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  headerCheckoutText: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: 1,
  },
  listContent: { paddingHorizontal: 24, paddingBottom: 100 },
  cartItem: {
    flexDirection: "row",
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  imageContainer: {
    width: 90,
    height: 90,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginRight: 20,
  },
  itemImage: { width: "100%", height: "100%" },
  itemInfo: { flex: 1, justifyContent: "space-between" },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    flex: 1,
    marginRight: 10,
  },
  itemPrice: { fontSize: 15, fontWeight: "600", color: "#000" },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 4,
  },
  qtyBtn: { padding: 8 },
  qtyText: {
    marginHorizontal: 12,
    fontWeight: "600",
    fontSize: 14,
    minWidth: 15,
    textAlign: "center",
  },
  removeText: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "underline",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyText: { fontSize: 16, color: "#666", marginBottom: 20 },
  shopAllButton: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  shopAllText: {
    color: "#000",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: 1,
  },
});
