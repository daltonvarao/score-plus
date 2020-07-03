import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import ScoreCounter from "./src";

let fonts = {
  DsDigital: require("./assets/fonts/DsDigital/DsDigital.ttf"),
  "DsDigital-Bold": require("./assets/fonts/DsDigital/DsDigital-Bold.ttf"),
  "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
  "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFontsAsync() {
    await Font.loadAsync(fonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <React.Fragment>
        <StatusBar style="light" hidden />
        <ScoreCounter />
      </React.Fragment>
    );
  }
}
