import React from "react";
import { 
  Box,
  Image,
  Pressable
} from "native-base";
import AppColor from "../../../assets/AppColor";

const CloseView = (props: any) => {
  const navigation = props.navigation

  return (
    <Box>
      <Pressable
        onPress = {() => {
          navigation.goBack()
        }}
      >
        <Image
          source = {require("../../../assets/image/close.png")}
          resizeMode = "contain"
          width = {6}
          height = {6}
          marginTop = {3}
          marginLeft = {4}
          tintColor = {AppColor.searchClose}
          alt = "close"
        />
      </Pressable>
    </Box>
  )
}

export default CloseView