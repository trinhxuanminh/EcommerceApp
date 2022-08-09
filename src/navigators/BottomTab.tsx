import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { 
  VStack, 
  Text, 
  ZStack,
  Center
} from "native-base";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AppText from "../assets/AppText";
import AppColor from "../assets/AppColor";
import HomeNavigator from "./HomeNavigator";
import CategoryNavigator from "./CategoryNavigator";
import AppStyle from "../styles";
import CartNavigator from "./CartNavigator";
import { useSelector } from "react-redux";
import StoreService from "../untils/StoreService";
import SettingNavigator from "./SettingNavigator";

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  const userId = useSelector((state: any) => state.users.userId)
  const carts = useSelector((state: any) => state.carts.value)
  const cartBadge = StoreService.getProductLengthInCart(carts, userId)

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName: string
            switch (route.name) {
              case AppText.homeNavigator: {
                iconName = "home"
                break
              }
              case AppText.categoryNavigator: {
                iconName = "bars"
                break
              }
              case AppText.cartNavigator: {
                iconName = "shopping-cart"
                break
              }
              case AppText.settingNavigator: {
                iconName = "cog"
                break
              }
              default: {
                iconName = ""
                break
              }
            }
            return (
              <VStack
                alignItems = "center"
                top = {1}
              >
                <ZStack
                  height = {10}
                  width = {10}
                  paddingTop = {3}
                  alignItems = "center"
                  justifyContent = "center"
                >
                  <FontAwesome5Icon
                    name = {iconName}
                    color = {focused ? AppColor.mainTheme : AppColor.deselectTab}
                    size = {20}
                  />
                  {
                    userId && (route.name == AppText.cartNavigator) && (
                      <Center
                        bg = {AppColor.cartBadge}
                        width = {5}
                        height = {5}
                        top = {2}
                        right = {0}
                        borderRadius = {10}
                      >
                        <Text
                          fontWeight = "semibold"
                          fontSize = {11}
                          color = "white"
                        >
                          {cartBadge}
                        </Text>
                      </Center>
                    )
                  }
                </ZStack>
                {
                  focused && (
                    <Text
                  color = {focused ? AppColor.mainTheme : AppColor.deselectTab}
                  fontSize = "xs"
                >
                  {route.name}
                </Text>
                  )
                }
              </VStack>
            );
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: AppStyle.CommonStyle.tabBar
        })}
      >
        <Tab.Screen
          name = {AppText.homeNavigator}
          component = {HomeNavigator}
        />
        <Tab.Screen
          name = {AppText.categoryNavigator}
          component={CategoryNavigator}
        />
        <Tab.Screen
          name = {AppText.cartNavigator}
          component = {CartNavigator}
        />
        <Tab.Screen
          name = {AppText.settingNavigator}
          component = {SettingNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab