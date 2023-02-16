// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
// import { Provider } from "react-redux";
// import store from "./src/state/store";
import RootApp from "./src/components/RootApp/RootApp";

export default function App() {

  return (
      <RootApp/>
  )

    // <Provider store={store}>
    // <RootApp/>
    // </Provider>


  // return (
  //   <LinearGradient
  //     colors={['#a2b7c7', 'white']}
  //     style={styles.container}
  //     start={{ x: 0, y: 0 }}
  //     end={{ x: 1, y: 1 }}
  //   >
  //     <SafeAreaProvider>
  //       <SafeAreaView style={styles.container}>
  //
  //         <StatusBar style="dark" />
  //
  //         <WelcomeBanner/>
  //
  //         <View style={styles.viewContainer}>
  //           <Header/>
  //
  //           <Players players={players} setPlayers={setPlayers}/>
  //         </View>
  //       </SafeAreaView>
  //     </SafeAreaProvider>
  //   </LinearGradient>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   viewContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   centerV: {
//     display: "flex",
//     flexDirection: "row",
//     alignContent: "center",
//   },
//   background: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: '100%',
//     padding: 16
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
// });
