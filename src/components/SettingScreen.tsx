import React from "react";
import {
  Avatar,
  Box, 
  Button, 
  HStack,
  Image,
  Pressable,
  Spacer,
  Text,
  VStack
} from "native-base";
import AppColor from "../assets/AppColor";
import TitleView from "./View/TitleView";
import AppText from "../assets/AppText";
import { useDispatch, useSelector } from "react-redux";
import StoreService from "../untils/StoreService";
import { useQuery } from "@tanstack/react-query";
import UserLoadingView from "./View/Setting/UserLoadingView";
import { logOut } from "../reducers/users/usersSlice";

const SettingScreen = (props: any) => {
  const dispatch = useDispatch()
  const userId = useSelector((state: any) => state.users.userId)
  const { data, isLoading } = useQuery(['UserDetail', userId], () => StoreService.getUserDetail(userId), {
    select: data => data.data
  })
  const userDetail = data
  const navigation = props.navigation

  const getAcronymName = () => {
    return userDetail.name.firstname.toUpperCase().slice(0,1) + userDetail.name.lastname.toUpperCase().slice(0,1)
  }

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleLogin = () => {
    navigation.navigate(AppText.loginScreen)
  }

  const handleLogOut = () => {
    const action = logOut({})
    dispatch(action)
    handleLogin()
  }

  return (
    <Box
      bg = {{
        linearGradient: {
          colors: [AppColor.gradient1, AppColor.gradient2],
          start: [1, 1],
          end: [0, 0.5]
        }
      }}
      width = "100%"
      height = "100%"
      alignSelf = "center"
    >
      <TitleView 
        titleName = {AppText.settingTitle}
        navigation = {navigation}
      />
      <VStack
        flex = {1}
        marginTop = {25}
        marginBottom = {120}
        paddingX = {4}
        justifyContent = "center"
        alignItems = "center"
      >
        {
          !userId && (
            <Button
              width = {200}
              height = {41}
              _text = {{
                fontSize: 18,
                fontWeight: "semibold",
                color: AppColor.darkText
              }}
              bg = {AppColor.gradient1}
              onPress = {handleLogin}
              borderRadius = "md"
            >
              {AppText.logIn}
            </Button>
          )
        }
        {
          !!userId && (
            <VStack
              width = "100%"
              height = "100%"
              space = {3}
            >
              {
                isLoading && (
                  <UserLoadingView/>
                )
              }
              {
                userDetail && (
                  <HStack
                    width = "100%"
                    alignItems = "center"
                    space = {3}
                  >
                    <Avatar
                      bg = "secondary.300"
                      size = {16}
                    >
                      {getAcronymName()}
                    </Avatar>
                    <Text
                      color = {AppColor.lightText}
                      fontSize = {18}
                      fontWeight = "medium"
                    >
                      {capitalize(userDetail.name.firstname)} {capitalize(userDetail.name.lastname)}
                    </Text>
                  </HStack>
                )
              }
              <Box
                bg = {AppColor.cartSeparation}
                height = {"px"}
              />
              <Spacer/>
              <Box
                bg = {AppColor.cartSeparation}
                height = {"px"}
              />
              <Pressable
                onPress = {handleLogOut}
              >
                <HStack
                  width = "100%"
                  alignItems = "center"
                  space = {3}
                >
                  <Image
                    source = {require("../assets/image/logOut.png")}
                    resizeMode = "contain"
                    width = {8}
                    height = {8}
                    tintColor = {AppColor.deleteCart}
                    alt = "logOut"
                  />
                  <Text
                    color = {AppColor.lightText}
                    fontSize = {18}
                    fontWeight = "semibold"
                  >
                    {AppText.logOut}
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          )
        }
      </VStack>
    </Box>
  )
}

export default SettingScreen