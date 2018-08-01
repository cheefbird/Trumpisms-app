import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";

export default class SearchCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { query: "" };
  }

  executeSearch = () => this.props.searchAction(this.state.query);

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled={true}
        contentContainerStyle={styles.safeView}
      >
        <View style={styles.container}>
          <Image
            source={{
              uri:
                "https://www.jasonfox.net/wp-content/uploads/2014/11/Trump.gif"
            }}
            style={styles.image}
          />
          <Text style={styles.titleText}>Search for Trumpisms!</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="i.e. Muslims"
          returnKeyType="search"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardAppearance="dark"
          onChangeText={text => this.setState({ query: text })}
          onSubmitEditing={this.executeSearch}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  image: {
    width: 180,
    height: 213
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  safeView: {
    marginBottom: 0
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 2,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingBottom: 8,
    paddingTop: 9,
    minWidth: 75,
    alignItems: "center",
    marginHorizontal: 8
  }
});
