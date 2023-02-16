import { TextInput } from "react-native";
import colors from "./colors/colors";

interface InputProps {
  value: string | undefined,
  placeholder?: string | undefined,
  keyboardType?: string | undefined,
  disabled?: boolean,
  onChange?: ((text: string) => void) | undefined
}

export default function Input(props: InputProps) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChange}
      value={props.value}
      placeholder="Player name"
      keyboardType="default"
      editable={!props.disabled}
    />
  );
}

const styles = {
  input: {
    height: 48,
    padding: 10,
    backgroundColor: colors.white,
    marginBottom: 8
  },
};