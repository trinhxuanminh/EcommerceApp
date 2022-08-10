import React from "react";
import { 
  Box,
  Spinner
} from "native-base";
import AppColor from "../../assets/AppColor";

const ProductLoadingView = () => {
  return (
    <Box
      flex = {1}
      justifyContent = "center"
      alignItems = "center"
    >
      <Spinner
        color = {AppColor.spinner}
        accessibilityLabel = "Loading posts"
      />
    </Box>
  )
}

export default ProductLoadingView