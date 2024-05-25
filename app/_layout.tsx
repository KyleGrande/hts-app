// RootLayout.tsx
import { Slot, Stack } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NYCMapView } from "@/views/NYCMapView";
import { SheetView } from "@/views/BottomSheetView";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function RootLayout() {
  const dismissKeyboard = () => {};
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NYCMapView />

        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "#F7F7F6", borderRadius: 20 }}
          style={{ paddingHorizontal: 24 }}
        >
          <BottomSheetView>
            <Slot />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
