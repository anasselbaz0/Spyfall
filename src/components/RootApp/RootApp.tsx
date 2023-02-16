import { StyleSheet, View } from "react-native";

import Onboarding from "../Onboarding";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeBanner from "../../WelcomeBanner";
import Header from "../../Header";
import Players from "../../Players";
import colors from "../../colors/colors";

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
    <LinearGradient
      colors={[colors.accent, colors.white]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

          <StatusBar style="inverted" />

          <WelcomeBanner/>

          <View style={styles.viewContainer}>
            <Header/>

            <Onboarding/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );

  // return (
  //   <SafeAreaProvider>
  //       <StatusBar style="inverted" />
  //
  //       <Onboarding/>
  //
  //   </SafeAreaProvider>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: 16,
  },
  centerV: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    padding: 16
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default RootApp;