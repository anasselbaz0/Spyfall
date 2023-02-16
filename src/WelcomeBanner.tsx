import { Alert, StyleSheet, Text, View } from "react-native";
import { ReactNode, useEffect, useState } from "react";
import SpyIcon from "./icons/SpyIcon";
import Title from "./components/shared/Title";
import CloseIcon from "./icons/CloseIcon";
import colors from "./colors/colors";
import { withOpacity } from "./colors/utils";

export default function WelcomeBanner() {
  const [hideWelcomeBanner, setHideWelcomeBanner] = useState(false);

  function closeWelcomeBanner() {
    setHideWelcomeBanner(true);
  }

  if (hideWelcomeBanner) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Title color={colors.white}>Welcome to Spyfall !</Title>
      <CloseIcon width={24} height={24} color={colors.white} onPress={closeWelcomeBanner}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
});
