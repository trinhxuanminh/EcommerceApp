import React, { useState } from "react";
import {
  Box, 
  Pressable,
  Image,
  Text,
  VStack,
  Input
} from "native-base";
import AppColor from "../assets/AppColor";
import AppText from "../assets/AppText";

const LoginScreen = (props: any) => {
  const navigation = props.navigation
  const [hidePassword, setHidePassword] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Box
      safeAreaTop
      flex = {1}
      bg = {
        {
          linearGradient: {
            colors: ["#c471ed", "#f64f59"],
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
            tintColor = {AppColor.darkText}
            alt = "back"
          />
        </Pressable>
        <Text
          textAlign = "center"
          fontWeight = "extrabold"
          fontSize = "5xl"
          color = {AppColor.darkText}
        >
          {AppText.logIn}
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
            color = {AppColor.text}
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
            color = {AppColor.text}
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
        </VStack>
      </Box>
    </Box>
  )
}

export default LoginScreen