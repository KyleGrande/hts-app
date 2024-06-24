import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { SearchBar } from "@rneui/themed";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useSession } from "../utils/ctx";
import { useBottomSheet } from "../utils/ctx";

const SpotSearchBar = () => {
  const [value, setValue] = useState("");
  const [showCancel, setShowCancel] = useState(false);
  const searchRef = useRef(null);
  const { bottomSheetRef } = useBottomSheet();

  const handleSearchChange = (newVal: any) => {
    setValue(newVal);
  };

  const onClearText = () => {
    setValue("");
  };

  const onCancel = () => {
    onClearText();
    setShowCancel(false);
    if (bottomSheetRef?.current) {
      bottomSheetRef.current.snapToIndex(0);
    }
  };

  const handleFocus = () => {
    setShowCancel(true);
    if (bottomSheetRef?.current) {
      bottomSheetRef.current.snapToIndex(1);
    }
  };
  const onBlur = () => {
    setShowCancel(false);
  };
  const { signOut } = useSession();

  return (
    <View
      style={{
        // display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      <SearchBar
        ref={searchRef}
        platform="ios"
        containerStyle={[
          { backgroundColor: "transparent" },
          showCancel ? styles.width100 : styles.width90,
        ]}
        inputContainerStyle={{
          backgroundColor: "#E9E9E9",
          borderRadius: 14,
        }}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={handleSearchChange}
        // onClearText={onClearText}
        placeholder="Find a Spot"
        placeholderTextColor="#888"
        // round
        showCancel={showCancel} // Pass the state to
        //showLoading
        cancelButtonTitle="Cancel"
        cancelButtonProps={{ buttonTextStyle: { color: "red" } }}
        onCancel={() => onCancel()}
        value={value}
        onBlur={onBlur}
        onFocus={handleFocus}
        clearIcon={
          value !== "" ? (
            <TouchableOpacity onPress={onClearText}>
              <MaterialIcons name="cancel" size={24} color="#C7C7CB" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              {/* <MaterialIcons name="cancel" size={0} color="#ffffff" /> */}
            </TouchableOpacity>
          )
        }
        searchIcon={<EvilIcons name="search" size={24} color="black" />}
      />
      {!showCancel && (
        <TouchableOpacity
          onPress={() => {
            signOut();
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
          }}
        >
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 30,
              backgroundColor: "#C7C7CB",
              // display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: 500, fontSize: 20 }}>
              KG
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  width90: {
    width: "86%",
  },
  width100: {
    width: "100%",
  },
});

export { SpotSearchBar };
