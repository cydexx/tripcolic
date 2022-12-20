import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "build a trip",
    image: "https://links.papareact.com/3pn",
    screen: "BuildTrip",
  },
  {
    id: "456",
    title: "find a trip",
    image: "https://links.papareact.com/28w",
    screen: "FindTrip",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
            <Image
              style={{ height: 120, width: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
