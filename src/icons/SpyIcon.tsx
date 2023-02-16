import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface IconProps {
  width: number | undefined,
  height: number | undefined,
}

const SpyIcon = (props: SvgProps & IconProps) => (
  <Svg
    fill="#ffffff"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M24.612 13 22.8 4.125a.808.808 0 0 0-.038-.136c-.303-.848-.963-1.508-1.812-1.812s-1.782-.213-2.557.251a4.656 4.656 0 0 1-4.788-.001c-.775-.464-1.707-.555-2.556-.25s-1.508.965-1.827 1.863L6.552 13h18.06zm4.903 4.143L25.944 15H5.333L2.4 17.2A.999.999 0 0 0 3 19h26a1 1 0 0 0 .515-1.857zM26 21H6a1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h4c.944 0 1.833-.444 2.399-1.2l1.2-1.6c.131-.174.307-.2.401-.2s.27.026.4.2l1.199 1.599A3 3 0 0 0 20 28h4a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1z" />
  </Svg>
)

export default SpyIcon
