import React from "react";
import { 
  Box,
  Spinner
} from "native-base";

const ProductLoadingView = () => {
  return (
    <Box
      flex = {1}
      justifyContent = "center"
      alignItems = "center"
    >
      <Spinner
        accessibilityLabel = "Loading posts"
      />
    </Box>
  )
}

export default ProductLoadingView