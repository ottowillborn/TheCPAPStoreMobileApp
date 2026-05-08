import { StyleSheet, Text, View } from "react-native";

export default function CartPage() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Your Cart</Text>
      <Text>Your items will appear here.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
});
