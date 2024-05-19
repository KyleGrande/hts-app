// RootLayout.tsx
import { Stack } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NYCMapView } from "@/views/NYCMapView";
import { SheetView } from "@/views/BottomSheetView";
import React from "react";
import { HomeSheet } from "@/SheetViews/HomeSheet";

export default function RootLayout() {
  const dismissKeyboard = () => {};

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NYCMapView />
        <SheetView>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="list" options={{ headerShown: false }} />
          </Stack>
        </SheetView>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
