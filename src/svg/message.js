import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MessageSvg = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 8.5a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 9.5 17a8.38 8.38 0 0 1-3.8-.9l-3.803 1.267a1 1 0 0 1-1.265-1.264L1.9 12.3A8.38 8.38 0 0 1 1 8.5 8.5 8.5 0 0 1 5.7.9 8.38 8.38 0 0 1 9.5 0h.5a8.48 8.48 0 0 1 8 8v.5Z"
      fill="#fff"
    />
  </Svg>
)

export default MessageSvg
