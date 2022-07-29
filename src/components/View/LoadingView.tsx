import React from "react";
import { 
  Box,
  Spinner
} from "native-base";

const LoadingView = () => {
  return (
    <Box
      flex = {1}
      justifyContent = "center"
      alignItems = "center"
    >
      <Spinner
        bottom = {60}
        accessibilityLabel = "Loading posts"
      />
    </Box>
  )
}

export default LoadingView