import { Asset } from "expo-asset"; // Import Asset for preloading
import { router } from "expo-router";
import { ArrowRight, Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const insets = useSafeAreaInsets();

  const handleLogin = async () => {
    try {
      // Preload the images of the onboarding slideshow
      await Asset.fromModule(
        require("@/assets/images/dune.jpg"),
      ).downloadAsync();
      await Asset.fromModule(
        require("@/assets/images/crescentmoon.jpg"),
      ).downloadAsync();
      await Asset.fromModule(
        require("@/assets/images/goodsleep.jpg"),
      ).downloadAsync();
    } catch (e) {
      console.warn("Failed to preload onboarding assets", e);
    }

    router.replace("/onboarding");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          <ImageBackground
            source={require("@/assets/images/crescentmoon.jpg")}
            style={[styles.heroHeader, { height: SCREEN_HEIGHT * 0.45 }]}
            resizeMode="cover"
          >
            <View style={[styles.heroOverlay, { paddingTop: insets.top + 20 }]}>
              <View style={styles.brandRow}>
                <Image
                  source={require("@/assets/images/logo_cpap_2025_2.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.heroTitle}>Member Sign In</Text>
                <View style={styles.accentBar} />
              </View>
            </View>
          </ImageBackground>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.sectionLabel}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.sectionLabel}>PASSWORD</Text>
              </View>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  {showPassword ? (
                    <EyeOff size={18} color="#000" />
                  ) : (
                    <Eye size={18} color="#000" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleLogin}
              activeOpacity={0.9}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
              <ArrowRight size={16} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountText}>Create an Account</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerLabel}>SUPPORT</Text>
              <Text style={styles.phoneText}>+1 888-965-7655</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
  },
  heroHeader: {
    width: "100%",
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    paddingHorizontal: 30,
    paddingBottom: 40,
    justifyContent: "flex-end", // Title at bottom
    alignItems: "flex-start", // Everything to the left
  },
  brandRow: {
    position: "absolute",
    top: 60,
    left: 30,
    alignItems: "flex-start",
  },
  logo: {
    height: 100,
    width: 100,
    tintColor: "#fff",
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "300",
    lineHeight: 46,
    letterSpacing: -1,
    textAlign: "left",
  },
  accentBar: {
    width: 40,
    height: 2,
    backgroundColor: "#fff",
    marginTop: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 30,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#000",
    marginBottom: 12,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    fontSize: 16,
    color: "#000",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -10,
    marginBottom: 40,
  },
  forgotText: {
    fontSize: 13,
    color: "#666",
    textDecorationLine: "underline",
  },
  signInButton: {
    backgroundColor: "#000",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  createAccountButton: {
    marginTop: 15,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  createAccountText: {
    color: "#000",
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 40,
    alignItems: "center",
  },
  footerLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#999",
    marginBottom: 8,
  },
  phoneText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
});
