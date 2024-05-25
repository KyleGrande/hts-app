import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { SpotSearchBar } from "@/components/SpotSearchBar";
import { Picker } from "@react-native-picker/picker";
const [selectedLanguage, setSelectedLanguage] = useState();
const RequestSheet = () => {
  const [value, setValue] = useState("0"); // Store value as a string in cents
  const [date, setDate] = useState(new Date());
  const [segmentedValue, setSegmentedValue] = useState(1);
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  // Helper function to format the cents value into a dollar string
  const formatCurrency = (cents) => {
    // Convert string to integer, ensure it's a number
    const numericValue = parseInt(cents, 10);
    // Convert to dollars and format to two decimal places
    return (numericValue / 100).toFixed(2);
  };

  const handleNumberPress = (num) => {
    // Update value in cents
    const newValue = value === "0" ? num : value + num;
    setValue(newValue);
  };

  return (
    <View>
      {/* <SpotSearchBar /> */}
      <SegmentedControl
        values={["Now", "Later"]}
        selectedIndex={segmentedValue}
        onChange={(event) => {
          setSegmentedValue(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <View>
        <Text>Date</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          // is24Hour={true}
          display="compact"
          onChange={onChangeDate}
        />
      </View>

      <View>
        <Text>Arrival Time</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          // is24Hour={true}
          display="compact"
          onChange={onChangeDate}
        />
      </View>
      <View>
        <Text>Departure Time</Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          // is24Hour={true}
          display="compact"
          onChange={onChangeDate}
        />
      </View>
      <Picker selectedValue={selectedLanguage} mode={"dialog"}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <TouchableOpacity style={styles.holdButton}>
        <Text style={styles.holdButtonText}>Hold that Spot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  holdButton: {
    // marginTop: 20,
    backgroundColor: "#4CAF50",
    // padding: 15,
    borderRadius: 5,
  },
  holdButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default RequestSheet;
