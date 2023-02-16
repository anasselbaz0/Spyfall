import { StyleSheet, Text, View } from "react-native";
import { ReactNode } from "react";
import SpyIcon from "./icons/SpyIcon";
import Title from "./components/shared/Title";
import colors from "./colors/colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <SpyIcon style={styles.icon} width={42} height={42}/>
      <Title>Spy</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8
  }
});
