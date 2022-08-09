import { 
  Box,
  HStack, 
  Text,
  Image,
  Pressable
} from "native-base";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import AppColor from "../../assets/AppColor";
import AppText from "../../assets/AppText";
import { changedDeleteCart } from "../../reducers/appStates/appStatesSlice";
import AppStyle from "../../styles";

const TitleView = (props: any) => {
  const dispatch = useDispatch()
  const insets = useSafeAreaInsets()
  const titleName = props.titleName
  const navigation = props.navigation
  const hasSearch = props.hasSearch
  const hasDelete = props.hasDelete
  const hasCancel = props.hasCancel

  const handleSetDelete = (isDelete: Boolean) => {
    const action = changedDeleteCart({
      isDeleteCart: isDelete
    })
    dispatch(action)
  } 

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
                marginTop = {3}
                tintColor = {AppColor.searchTint}
                alt = "search"
              />
            </Pressable>
          )
        }
        { 
          hasDelete && (
            <Pressable
              onPress = {() => handleSetDelete(true)}
            >
              <Image
                source = {require("../../assets/image/deleteCart.png")}
                resizeMode = "contain"
                width = {6}
                height = {6}
                marginTop = {3}
                tintColor = {AppColor.searchTint}
                alt = "delete"
              />
            </Pressable>
          )
        }
        { 
          hasCancel && (
            <Pressable
              onPress = {() => handleSetDelete(false)}
            >
              <Image
                source = {require("../../assets/image/cancel.png")}
                resizeMode = "contain"
                width = {6}
                height = {6}
                marginTop = {3}
                tintColor = {AppColor.searchTint}
                alt = "cancel"
              />
            </Pressable>
          )
        }
      </HStack>
    </Box>
  )
}

export default TitleView