import { Text } from "react-native";
import { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode | ReactNode[],
  color?: string
}

export default function Title(props: SubTitleProps) {
  const titleStyle = {
    color: props.color ?? '#1c1c1c',
    fontSize: 16,
    textAlign: 'center'
  };

  return (
    // @ts-ignore
    <Text style={titleStyle}>{props.children}</Text>
  );
}
