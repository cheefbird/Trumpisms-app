import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import HomeScreen from "./screens/HomeScreen";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
