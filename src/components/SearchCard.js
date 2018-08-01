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
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled={true}
        contentContainerStyle={styles.safeView}
      >
        <Image
          source={{
            uri: "https://www.jasonfox.net/wp-content/uploads/2014/11/Trump.gif"
          }}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>Search for Trumpisms!</Text>
          <TextInput style={styles.input} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  subContainer: {
    alignItems: "stretch"
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
    marginBottom: 50
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 75
  }
});
