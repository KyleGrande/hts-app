import { StyleSheet } from "react-native";

import MapView from "react-native-maps";

const NYCMapView = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 40.721, // Approx center of Lower Manhattan
        longitude: -74.0018,
        latitudeDelta: 0.0922, // Zoom level adjustments
        longitudeDelta: 0.0421, // Smaller deltas for a closer zoom
      }}
    />
  );
};
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
export { NYCMapView };
