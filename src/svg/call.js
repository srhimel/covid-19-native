import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CallSvg = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 14.92v3a2.002 2.002 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 .12 2.18 2 2 0 0 1 2.11 0h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 7.91a15.999 15.999 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 20 14.92Z"
      fill="#fff"
    />
  </Svg>
)

export default CallSvg
