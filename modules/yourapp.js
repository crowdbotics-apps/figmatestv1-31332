import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Blank } from "../screens/Mostly1ColumnScreen(10414:181)6263987_10414_181/index"
import { Blank as Blank2 } from "../screens/2ColumnTileList(10413:3)11263985_10413_3/index"
import { Blank as Blank3 } from "../screens/DetailsScreen(10413:40)11263986_10413_40/index"
import { Blank as Blank4 } from "../screens/ImageCardList(10417:1087)6263984_10417_1087/index"

const FirstPage = () => {
  return (
    <Blank />
  )
};

const SecondPage = () => {
  return (
    <Blank2 />
  )
};

const ThirdPage = () => {
  return (
    <Blank3 />
  )
};

const FourthPage = () => {
  return (
    <Blank4 />
  )
};

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to your brand new app!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    padding: 13
  },
  text: {
    fontSize: 20
  },
})

export const YourAppModule = {
  name: "YourApp",
  path: "./",
  package: "@modules",
  value: {
    title: "My Ticket",
    navigator: FirstPage
  }
}
