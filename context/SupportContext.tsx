import React, { createContext, useContext, useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export const CHAT_WIDTH = SCREEN_WIDTH * 0.9;

interface SupportContextType {
  toggleSupport: () => void;
  slideAnim: Animated.Value;
  isChatOpen: boolean;
}

const SupportContext = createContext<SupportContextType | undefined>(undefined);

export const SupportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleSupport = () => {
    const toValue = isChatOpen ? 0 : -CHAT_WIDTH;
    Animated.spring(slideAnim, {
      toValue,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
    setIsChatOpen(!isChatOpen);
  };

  return (
    <SupportContext.Provider value={{ toggleSupport, slideAnim, isChatOpen }}>
      {children}
    </SupportContext.Provider>
  );
};

export const useSupport = () => {
  const context = useContext(SupportContext);
  if (!context)
    throw new Error("useSupport must be used within a SupportProvider");
  return context;
};
