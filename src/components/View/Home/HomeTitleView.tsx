import { 
  Box,
  HStack, 
  Text,
  Image
} from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppColor from "../../../assets/AppColor";
import AppText from "../../../assets/AppText";

const HomeTitleView = () => {
  const insets = useSafeAreaInsets()

  return (
    <Box
      bg = {AppColor.homeTitle}
      style = {
        {
          shadowColor: AppColor.shadow,
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: 2
          }
        }
      }
    >
      <Box
        height = {insets.top}
      />
      <HStack
        alignItems = "center"
        paddingX = {4}
      >
        <Text
          fontSize = {"4xl"}
          flex = {1}
          fontWeight = "bold"
          color = {AppColor.mainTheme}
        >
          {AppText.homeTitle}
        </Text>
        <Image
            source = {require("../../../assets/image/search.png")}
            resizeMode = "contain"
            width = {6}
            height = {6}
            tintColor = {AppColor.searchTint}
            alt = "search"
          />
      </HStack>
    </Box>
  )
}

export default HomeTitleView