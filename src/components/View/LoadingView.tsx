import React from "react";
import { 
  Center,
  Spinner
} from "native-base";

const LoadingView = () => {
  return (
    <Center
      flex = {1}
      paddingBottom = {100}
    >
      <Spinner
        accessibilityLabel = "Loading posts"
      />
    </Center>
  )
}

export default LoadingView