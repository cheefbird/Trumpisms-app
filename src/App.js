import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { Store } from "./Store";
import HomeScreen from "./screens/HomeScreen";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
