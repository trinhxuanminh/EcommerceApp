import React from "react";
import { 
  Box,
  Spinner
} from "native-base";

const UserLoadingView = () => {
  return (
    <Box
      width = "100%"
      height = {16}
      justifyContent = "center"
      alignItems = "center"
    >
      <Spinner
        accessibilityLabel = "Loading posts"
      />
    </Box>
  )
}

export default UserLoadingView