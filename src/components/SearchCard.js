import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";

export default class SearchCard extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://www.jasonfox.net/wp-content/uploads/2014/11/Trump.gif"
          }}
          style={styles.image}
        />
        <Text style={styles.titleText}>Search for Trumpisms!</Text>
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    margin: 10,
    alignItems: "center"
  },
  image: {
    width: 180,
    height: 213
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: "center"
  }
});
