import { CHAT_WIDTH, useSupport } from "@/context/SupportContext";
import { X } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LiveChat = () => {
  const { toggleSupport } = useSupport();

  return (
    <View style={styles.chatArea}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatTitle}>Live Support</Text>
        <TouchableOpacity
          onPress={toggleSupport}
          accessibilityLabel="Close Chat"
        >
          <X size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.chatPlaceholder}>
        <Text>Support Chat Content Goes Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatArea: {
    width: CHAT_WIDTH,
    backgroundColor: "#fff",
    borderLeftWidth: 1,
    borderLeftColor: "#eee",
    paddingTop: 60,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  chatTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  chatPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LiveChat;
