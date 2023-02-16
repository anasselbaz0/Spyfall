import { StyleSheet, View } from 'react-native';
import Button from "./shared/Button";
import { withOpacity } from "../colors/utils";
import colors from "../colors/colors";
import SubTitle from "./shared/SubTitle";
import Logo from "./Logo";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.content}>
          <View style={styles.box}>
            <Logo/>
            <SubTitle color={colors.gray}>A game for those who like to feel like a detective, and find a liar in the company.</SubTitle>
          </View>
        </View>

        <View style={styles.cta}>
          <Button title='Get Started'/>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
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
  cta: {
    marginBottom: 40
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  box: {
    backgroundColor: withOpacity(colors.white, 0.4),
    borderRadius: 8,
    padding: 24,
  }
});
