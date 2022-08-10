import React from "react";
import { 
  Box,
  Spinner
} from "native-base";
import AppColor from "../../assets/AppColor";

const LoadingView = () => {
  return (
    <Box
      flex = {1}
      justifyContent = "center"
      alignItems = "center"
    >
      <Spinner
        bottom = {60}
        color = {AppColor.spinner}
        accessibilityLabel = "Loading posts"
      />
    </Box>
  )
}

export default LoadingView