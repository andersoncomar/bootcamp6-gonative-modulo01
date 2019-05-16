import "./config/ReactotonConfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo ReactNative",
        author: "Anderson Comar",
        content:
          "React Native brings Reacts declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform."
      },
      {
        id: 2,
        title: "Aprendendo ReactNative",
        author: "Anderson Comar",
        content:
          "React Native brings Reacts declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform."
      },
      {
        id: 3,
        title: "Aprendendo ReactNative",
        author: "Anderson Comar",
        content:
          "React Native brings Reacts declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform."
      }
    ]
  };
  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EF7677"
  },

  header: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },

  headerTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"
  }
});
