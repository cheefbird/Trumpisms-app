import _ from "lodash";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { fetchSearchResults } from "../actons";
import SearchCard from "../components/SearchCard";

class HomeScreen extends Component {
  search = query => {
    this.props.fetchSearchResults(query);
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchCard searchAction={this.search} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { results, userQuery } = state.searchResults;
  const quotes = _.map(results, quote => {
    return { ...quote };
  });

  return { quotes, userQuery };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
});

export default connect(
  mapStateToProps,
  { fetchSearchResults }
)(HomeScreen);
