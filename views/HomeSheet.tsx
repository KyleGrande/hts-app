import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
const HomeSheet = () => {
  const button = () => {
    console.log("Button Pressed");
  };

  return (
    <View>
      <TouchableOpacity onPress={button}>
        <View style={styles.contentContainer}>
          <Octicons name="dot-fill" size={72} color="#DB4437" />
          <View>
            <Text style={{ fontSize: 18 }}>Instant ⚡</Text>
            <Text style={{ color: "#868782", fontSize: 15 }}>
              Estimated Nearby Cost
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Link href="/request" asChild>
        <TouchableOpacity>
          <View style={styles.contentContainer}>
            <Octicons name="dot-fill" size={72} color="#FEC90C" />
            <View>
              <Text style={{ fontSize: 18 }}>Reserve 📅</Text>
              <Text style={{ color: "#868782", fontSize: 15 }}>
                5:30pm on Broadway
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <Link href="/list" asChild>
        <TouchableOpacity>
          <View style={styles.contentContainer}>
            <Octicons name="dot-fill" size={72} color="#519726" />
            <View>
              <Text style={{ fontSize: 18 }}>Sell 💸</Text>
              <Text style={{ color: "#868782", fontSize: 15 }}>
                Estimated Nearby Value
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "white",
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 14,
    gap: 10,
  },
});

export { HomeSheet };
