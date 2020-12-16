import React, { useState, useEffect } from "react";
import { AppLoading } from "expo-app-loading";
import { Container } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import MyHeader from "./src/components/MyHeader";
import MyTabs from "./src/components/MyTabs";

export default function App() {

  const [loaded] = Font.useFonts({
    'Roboto': require("./node_modules/native-base/Fonts/Roboto.ttf"),
    'Roboto_medium': require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font
  });

  return (
      <Container>
        <MyHeader/>
        <MyTabs/>
      </Container>
  );
};