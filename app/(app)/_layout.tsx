import React, { useCallback, useMemo, useRef, useState } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { Redirect, Slot } from "expo-router";

import { useSession } from "../../utils/ctx";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NYCMapView } from "@/views/NYCMapView";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetProvider } from "../../utils/ctx";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  const bottomSheetRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const snapPoints = useMemo(() => ["50%", "75%"], []);
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    setCurrentIndex(index);
  }, []);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NYCMapView />
        <BottomSheetProvider
          bottomSheetRef={bottomSheetRef}
          currentIndex={currentIndex}
        >
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
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
