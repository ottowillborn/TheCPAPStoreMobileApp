import { useSupport } from "@/context/SupportContext";
import { MessageCircleQuestionIcon, Search } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Only include the dynamic parts here
const KEYWORDS = [
  "cpap masks",
  "cpap machines",
  "cpap filters",
  "cpap accessories",
  "oxygen concentrators",
  "oxygen supplies",
];

const SearchHeader = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const { toggleSupport } = useSupport();

  const staticPrefix = "Search for ";

  const getCommonPrefixLength = (str1: string, str2: string) => {
    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
      i++;
    }
    return i;
  };

  useEffect(() => {
    const currentWord = KEYWORDS[index];
    const nextWord = KEYWORDS[(index + 1) % KEYWORDS.length];
    const commonPrefixLen = getCommonPrefixLength(currentWord, nextWord);

    // Pause at the end of a word
    if (subIndex === currentWord.length && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    // Switch to next word once we've deleted back to the commonality
    if (subIndex === commonPrefixLen && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % KEYWORDS.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <SafeAreaView style={styles.overlayHeader}>
      <View style={styles.headerRow}>
        <View style={styles.searchPill}>
          <Search size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            // Combine the static prefix with the animated slice
            placeholder={`${staticPrefix}${KEYWORDS[index].substring(0, subIndex)}`}
            placeholderTextColor="#717171"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.iconCircle} onPress={toggleSupport}>
          <MessageCircleQuestionIcon size={24} color="#000" />
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
