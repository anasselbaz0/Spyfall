import { Text } from "react-native";
import { ReactNode } from "react";
import colors from "../../colors/colors";

interface TitleProps {
  children: ReactNode | ReactNode[],
  color?: string
}

export default function Title(props: TitleProps) {
  const titleStyle = {
    color: props.color ?? colors.white,
    fontSize: 24,
    fontWeight: '600',
  };

  return (
    // @ts-ignore
    <Text style={titleStyle}>{props.children}</Text>
  );
}
