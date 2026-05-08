import { Search, ShoppingBag } from "lucide-react-native";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const SearchHeader = () => {
  return (
    <SafeAreaView style={styles.overlayHeader}>
      <View style={styles.headerRow}>
        <View style={styles.searchPill}>
          <Search size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            placeholder="Search products..."
            placeholderTextColor="#717171"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.iconCircle}>
          <ShoppingBag size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlayHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    gap: 12,
  },
  searchPill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    height: 45,
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});

export default SearchHeader;
