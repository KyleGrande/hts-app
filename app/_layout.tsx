// RootLayout.tsx
import { Slot, Stack } from "expo-router";
import { TouchableWithoutFeedback } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NYCMapView } from "@/views/NYCMapView";
import React, {
  useCallback,
  useMemo,
  useRef,
  createContext,
  useContext,
} from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import RequestSheet from "@/views/RequestSheet";

// Context to provide BottomSheet controls
type BottomSheetContextType = {
  snapTo: (index: number) => void;
  bottomSheetRef: React.RefObject<any>;
};
export const BottomSheetContext = createContext<
  BottomSheetContextType | undefined
>(undefined);

export function useBottomSheet() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error("useBottomSheet must be used within BottomSheetContext");
  return ctx;
}

export default function RootLayout() {
  const dismissKeyboard = () => {};
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const snapTo = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };

  return (
    <BottomSheetContext.Provider value={{ snapTo, bottomSheetRef }}>
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
    </BottomSheetContext.Provider>
  );
}
