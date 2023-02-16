import { Text } from "react-native";
import { ReactNode } from "react";

interface NormalTextProps {
  children: ReactNode | ReactNode[],
  color?: string
}

export default function NormalText(props: NormalTextProps) {
  const textStyle = {
    color: props.color ?? '#1c1c1c',
    fontSize: 16,
  };

  return (
    <Text style={textStyle}>{props.children}</Text>
  );
}
