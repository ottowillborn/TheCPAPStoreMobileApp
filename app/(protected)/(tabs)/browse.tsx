import { StyleSheet, Text, View } from "react-native";

export default function BrowsePage() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Browse Catalog</Text>
      <Text>Discover new CPAP essentials.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
});
