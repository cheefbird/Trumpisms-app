import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import SearchCard from "../components/SearchCard";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
});
