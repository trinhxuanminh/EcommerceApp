import React from "react"
import AppColor from "../../../assets/AppColor"
import AppStyle from "../../../styles"
import { 
  Box,
  HStack,
  Pressable,
  Image,
  Text
} from "native-base"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const TitleView = (props: any) => {
  const insets = useSafeAreaInsets()
  const navigation = props.navigation
  const category = props.category

  return (
    <Box
      bg = {AppColor.title}
      style = {AppStyle.CommonStyle.titleScreen}
    >
      <Box
        height = {insets.top}
      />
      <HStack
        alignItems = "center"
        paddingX = {4}
        marginBottom = {1}
      >
        <Pressable
          onPress = {() => {
            navigation.goBack()
          }}
        >
          <Image
            source = {require("../../../assets/image/back.png")}
            resizeMode = "contain"
            width = {6}
            height = {6}
            tintColor = {AppColor.lightTint}
            alt = "back"
          />
        </Pressable>
        <Text
          fontSize = {26}
          height = {10}
          flex = {1}
          fontWeight = "bold"
          color = {AppColor.lightText}
          marginRight = {6}
          textAlign = "center"
        >
          {category}
        </Text>
      </HStack>
    </Box>
  )
}

export default TitleView