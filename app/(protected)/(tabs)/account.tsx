import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AccountPage() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>My Account</Text>
      <Text>John Doe</Text>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/")}
      >
        <Text style={{ color: "red" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  logout: { marginTop: 20, padding: 10 },
});
