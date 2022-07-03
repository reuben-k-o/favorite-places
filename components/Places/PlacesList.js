import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }

  function addPlaceHandler() {
    navigation.navigate("AddPlace");
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.welcome}>
          Welcome, Let's Make Memories together
        </Text>

        <OutlinedButton onPress={addPlaceHandler}>Get Started!</OutlinedButton>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    color: Colors.primary200,
    fontSize: 24,
    marginBottom: 30,
  },
});
