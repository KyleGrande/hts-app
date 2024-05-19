import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Slot } from "expo-router";

export const SheetView = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
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
  );
};
