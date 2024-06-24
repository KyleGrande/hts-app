import { HomeSheet } from "@/views/HomeSheet";
import { SpotSearchBar } from "@/components/SpotSearchBar";
import { View } from "react-native";
import { useBottomSheet } from "../../utils/ctx";

export default function Index() {
  const { bottomSheetRef, currentIndex } = useBottomSheet();

  return (
    <View>
      <SpotSearchBar />
      {currentIndex === 0 && <HomeSheet />}
      {currentIndex === 1 && <View></View>}
    </View>
  );
}
