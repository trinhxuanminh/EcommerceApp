import { 
  Box,
  HStack, 
  Text,
  Image,
  Pressable
} from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppColor from "../../assets/AppColor";
import AppText from "../../assets/AppText";
import AppStyle from "../../styles";

const TitleView = (props: any) => {
  const insets = useSafeAreaInsets()
  const titleName = props.titleName
  const hasSearch = props.hasSearch
  const navigation = props.navigation

  return (
    <Box
      bg = {AppColor.homeTitle}
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
        <Text
          fontSize = {"4xl"}
          height = {12}
          flex = {1}
          fontWeight = "bold"
          color = {AppColor.mainTheme}
        >
          {titleName}
        </Text>
        { 
          hasSearch && (
            <Pressable
              onPress = {() => {
                navigation.navigate(AppText.searchScreen)
              }}
            >
              <Image
                source = {require("../../assets/image/search.png")}
                resizeMode = "contain"
                width = {6}
                height = {6}
                tintColor = {AppColor.searchTint}
                alt = "search"
              />
            </Pressable>
          )
        }
      </HStack>
    </Box>
  )
}

export default TitleView