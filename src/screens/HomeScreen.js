import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>Search for Trumpisms!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  contentContainer: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
