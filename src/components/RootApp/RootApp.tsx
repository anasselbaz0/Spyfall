import React from 'react';
// import { useSelector } from "react-redux";
// import { appSelectors } from "../../state/app/appSlice";
// import { STEPS } from "../../state/app/appTypes";
import Onboarding from "../Onboarding";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const RootApp = () => {
  // const step = useSelector(appSelectors.step);
  //
  // const getStepContent = (step: STEPS) => {
  //   switch (step) {
  //     case STEPS.ONBOARDING: return <Onboarding/>
  //   }
  // }

  // return <Onboarding/>;

  return (
    <SafeAreaProvider>
      {/*<SafeAreaView>*/}
        {/*<StatusBar style="inverted" />*/}
        <Onboarding/>
      {/*</SafeAreaView>*/}
    </SafeAreaProvider>
  );
};

export default RootApp;