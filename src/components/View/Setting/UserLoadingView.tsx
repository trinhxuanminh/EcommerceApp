import React from "react";
import { 
  Box,
  Spinner
} from "native-base";
import AppColor from "../../../assets/AppColor";

const UserLoadingView = () => {
  return (
    <Box
      width = "100%"
      height = {16}
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

export default UserLoadingView