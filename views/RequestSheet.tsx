// RequestSheet.tsx
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import SegmentedControl, {
  SegmentedControlBase,
} from "@react-native-segmented-control/segmented-control";
import { Picker } from "@react-native-picker/picker";
import { SpotSearchBar } from "../components/SpotSearchBar";
const RequestSheet = () => {
  const [value, setValue] = useState("0"); // Store value as a string in cents
  const [date, setDate] = useState(new Date());
  const [segmentedValue, setSegmentedValue] = useState(1);
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [relistValue, setRelistValue] = useState(true);
  const onChangeDate = (event: number, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <SpotSearchBar />
      <SegmentedControl
        values={["Now", "Later"]}
        selectedIndex={segmentedValue}
        onChange={(event) => {
          setSegmentedValue(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <View style={styles.selectContainer}>
        <Text style={styles.selectText}>Date</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          display="compact"
          // onChange={onChangeDate}
        />
      </View>

      <View style={styles.selectContainer}>
        <Text style={styles.selectText}>Arrival Time</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          display="compact"
        />
      </View>
      <View style={styles.selectContainer}>
        <Text style={styles.selectText}>Departure Time</Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          display="compact"
        />
      </View>
      <View style={styles.selectContainer}>
        <Text style={styles.selectText}>Repeat</Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          display="compact"
        />
      </View>
      <View style={styles.selectContainer}>
        <Text style={styles.selectText}>Max Spend</Text>

        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={"time"}
          display="compact"
        />
      </View>
      <View style={styles.selectContainer}>
        <Text style={styles.selectText}>Relist</Text>

        <Switch
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={"#f4f3f4"}
          // ios_backgroundColor="#3e3e3e"
          value={relistValue}
          onValueChange={(value) => setRelistValue(value)}
        />
      </View>
      {/* <Picker
        selectedValue={selectedLanguage}
        mode={"dialog"}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      <TouchableOpacity>
        <Text style={styles.holdButtonText}>Grab that Spot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  holdButtonText: {
    color: "#4CAF50",
    fontSize: 38,
    padding: 10,
    textAlign: "center",
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  selectText: {
    fontSize: 18,
  },
});

export default RequestSheet;
