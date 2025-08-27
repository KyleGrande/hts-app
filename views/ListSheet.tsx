import React, { useState, useEffect } from "react";
import { useBottomSheet } from "@/app/_layout";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { SpotSearchBar } from "@/components/SpotSearchBar";
const ListSheet = () => {
  const { snapTo } = useBottomSheet();
  useEffect(() => {
    snapTo(1);
  }, [snapTo]);
  const [value, setValue] = useState("0"); // Store value as a string in cents
  const [date, setDate] = useState(new Date());
  const router = useRouter();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  const [segementedControlIndex, setSegementedControlIndex] = useState(1);

  // Helper function to format the cents value into a dollar string
  const formatCurrency = (cents) => {
    // Convert string to integer, ensure it's a number
    const numericValue = parseInt(cents, 10);
    // Convert to dollars and format to two decimal places
    return (numericValue / 100).toFixed(2);
  };

  const handleNumberPress = (num: string) => {
    // Update value in cents
    const newValue = value === "0" ? num : value + num;
    setValue(newValue);
  };

  const handleMinusPress = () => {
    if (value.length === 1) {
      setValue("0");
      return;
    }
    setValue(value.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={`$${formatCurrency(value)}`} // Display value formatted as currency
        editable={false} // Make the input non-editable; numbers are added via buttons
        placeholder="$0.00"
      />
      <Text style={styles.estimatedValueText}>Estimated Value $5.40</Text>
      <View style={styles.numberPad}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.number}
            onPress={() => handleNumberPress(number)}
          >
            <Text style={styles.numberText}>{number}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.number}></View>
        <TouchableOpacity
          style={styles.number}
          onPress={() => handleNumberPress("0")}
        >
          <Text style={styles.numberText}>{"0"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={handleMinusPress}>
          <Text style={styles.numberText}>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.number}></View>
      </View>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"datetime"}
        display="compact"
        onChange={onChangeDate}
      />
      <TouchableOpacity>
        <Text style={styles.holdButtonText}>Hold that Spot</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("/")}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    // rowGap: 15,
  },
  input: {
    height: 100,
    marginVertical: 12,
    // borderWidth: 1,
    width: "100%",
    padding: 10,
    textAlign: "center",
    fontSize: 100,
    color: "#519726",
    fontWeight: "bold",
    // marginVertical: 20,
  },
  estimatedValueText: {
    fontSize: 24,
    color: "#519726",
    // marginVertical: 20,
  },
  numberPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // maxWidth: 300,
  },
  number: {
    width: "33%",
    height: "23%",
    // padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 24,
  },
  dateText: {
    fontSize: 16,
  },
  holdButtonText: {
    color: "#4CAF50",
    fontSize: 38,
    padding: 10,
    textAlign: "center",
  },
  cancelButtonText: {
    color: "red",
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
});

export default ListSheet;
