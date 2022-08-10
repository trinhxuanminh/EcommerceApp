import React, { useEffect, useState } from "react";
import {
  Box, 
  Pressable,
  Image,
  Text,
  VStack,
  Input,
  Button,
  useToast
} from "native-base";
import AppColor from "../assets/AppColor";
import AppText from "../assets/AppText";
import { Keyboard } from "react-native";
import { useQuery } from "@tanstack/react-query";
import StoreService from "../untils/StoreService";
import { login } from "../reducers/users/usersSlice";
import { useDispatch } from "react-redux";

const LoginScreen = (props: any) => {
  const navigation = props.navigation
  const toast = useToast()
  const dispatch = useDispatch()
  const [hidePassword, setHidePassword] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const tokenQuery = useQuery(['Login', username, password], () => StoreService.login(username, password), {
    select: data => data.data
  })
  const allUserQuery = useQuery(['AllUser'], StoreService.getAllUser, {
    select: data => data.data
  })
  const [loadToken, setLoadToken] = useState(false)

  const handleSubmitEditing = () => {
    Keyboard.dismiss()
  }

  const showToast = (message: string) => {
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Box
            bg = {AppColor.errorToast}
            rounded = "full"
            paddingY = {2}
            paddingX = {6}
          >
            <Text
              color = {AppColor.lightText}
              fontSize = {17}
              fontWeight = "bold"
            >
              {message}
            </Text>
          </Box>
        )
      }
    })
  }

  const handleError = () => {
    showToast(AppText.loginToast)
    setLoadToken(false)
  }

  const handleLogin = () => {
    if (!tokenQuery.data) {
      handleError()
      return
    }
    if (!allUserQuery.isLoading) {
      if (!allUserQuery.data) {
        handleError()
        return
      }
      const userId = StoreService.getUserId(allUserQuery.data, username)
      if (!userId) {
        handleError()
        return
      }
      const action = login({
        userId: userId
      })
      dispatch(action)
      navigation.goBack()
    }
  }

  const handleLoadToken = () => {
    handleSubmitEditing()
    if (tokenQuery.isLoading) {
      setLoadToken(true)
    } else {
      handleLogin()
    }
  }

  useEffect(() => {
    if (loadToken) {
      handleLogin()
    }
  })

  return (
    <Box
      safeAreaTop
      flex = {1}
      bg = {
        {
          linearGradient: {
            colors: [AppColor.gradient1, AppColor.gradient2],
            start: [0, 0],
            end: [1, 0]
          }
        }
      }
      width = "100%"
      alignSelf = "center"
    >
      <Box
        height = {130}
        paddingX = {4}
        marginTop = {2}
      >
        <Pressable
          onPress = {() => {
            navigation.goBack()
          }}
        >
          <Image
            source = {require("../assets/image/back.png")}
            resizeMode = "contain"
            width = {8}
            height = {8}
            tintColor = {AppColor.lightTint}
            alt = "back"
          />
        </Pressable>
        <Text
          textAlign = "center"
          fontWeight = "extrabold"
          fontSize = "5xl"
          color = {AppColor.lightText}
        >
          {AppText.appName}
        </Text>
      </Box>
      <Box
        flex = {1}
        bg = {AppColor.background}
        borderTopRadius = {24}
      >
        <VStack
          paddingTop = {10}
          paddingX = {8}
          space = {2}
        >
          <Text
            color = {AppColor.lightText}
            fontWeight = "bold"
            fontSize = {20}
          >
            Username
          </Text>
          <Input
            variant = "underlined"
            fontSize = {17}
            placeholderTextColor = {AppColor.placeholder}
            placeholder = {AppText.usernamePlaceholder}
            defaultValue = {username}
            onChangeText = {setUsername}
            returnKeyType = "done"
            onSubmitEditing = {handleSubmitEditing}
            InputLeftElement = {
              <Image
                source = {require("../assets/image/person.png")}
                resizeMode = "contain"
                width = {6}
                height = {6}
                marginBottom = {2}
                marginRight = {2}
                tintColor = {AppColor.placeholder}
                alt = "username"
              />
            }
          />
          <Text
            color = {AppColor.lightText}
            fontWeight = "bold"
            fontSize = {20}
            marginTop = {1}
          >
            Password
          </Text>
          <Input
            variant = "underlined"
            fontSize = {17}
            placeholderTextColor = {AppColor.placeholder}
            placeholder = {AppText.passwordPlaceholder}
            type = {hidePassword ? "password" : "text"}
            defaultValue = {password}
            onChangeText = {setPassword}
            returnKeyType = "done"
            onSubmitEditing = {handleSubmitEditing}
            InputRightElement = {
              <Pressable
                onPress = {() => setHidePassword(!hidePassword)}
              >
                <Image
                  source = {hidePassword ? require("../assets/image/visible.png") : require("../assets/image/hide.png")}
                  resizeMode = "contain"
                  width = {6}
                  height = {6}
                  marginBottom = {2}
                  tintColor = {AppColor.placeholder}
                  alt = "username"
                />
              </Pressable>
            }
          />
          <Button
            isLoading = {loadToken}
            marginTop = {5}
            width = {200}
            height = {41}
            alignSelf = "center"
            _text = {{
              fontSize: 18,
              fontWeight: "semibold",
              color: AppColor.lightText
            }}
            bg = {AppColor.theme}
            onPress = {handleLoadToken}
          >
            {AppText.logIn}
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

export default LoginScreen