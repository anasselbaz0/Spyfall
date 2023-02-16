import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { MouseEventHandler } from "react";

interface CloseProps {
  onPress?: MouseEventHandler<Svg>
}

const CloseIcon = (props: SvgProps & CloseProps) => (
  <Svg
    fill={props.color ? props.color : "#1c1c1c"}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path d="M38 12.82L35.18 10L24 21.18L12.82 10L10 12.82L21.18 24L10 35.18L12.82 38L24 26.82L35.18 38L38 35.18L26.82 24L38 12.82Z" />
  </Svg>
)

export default CloseIcon
