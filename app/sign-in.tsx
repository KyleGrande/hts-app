import { Text, View } from "react-native";
import { router } from "expo-router";

import { useSession } from "../utils/ctx";
import { Auth } from "../utils/auth.apple";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          router.replace("/");
        }}
      >
        Sign In
      </Text>
      <Auth />
    </View>
  );
}
