import { HomeSheet } from "@/views/HomeSheet";
import { SpotSearchBar } from "@/components/SpotSearchBar";
import { View } from "react-native";
export default function Index() {
  return (
    <View>
      <SpotSearchBar />
      <HomeSheet />
    </View>
  );
}
