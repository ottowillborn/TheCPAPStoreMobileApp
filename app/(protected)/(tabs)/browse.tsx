import SearchHeader from "@/app/components/SearchHeader";
import { StyleSheet, Text, View } from "react-native";

export default function BrowsePage() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <View style={styles.center}>
        <Text style={styles.title}>Browse Catalog</Text>
        <Text>Discover new CPAP essentials.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
});
