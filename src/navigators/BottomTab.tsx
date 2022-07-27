import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../components/HomeScreen";
import CategoryScreen from "../components/CategoryScreen";
import CartScreen from "../components/CartScreen";
import SettingScreen from "../components/SettingScreen";
import { VStack, Text } from "native-base";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AppText from "../assets/AppText";
import AppColor from "../assets/AppColor";

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions = {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName: string
            switch (route.name) {
              case AppText.homeRoute: {
                iconName = "home"
                break
              }
              case AppText.categoryRoute: {
                iconName = "bars"
                break
              }
              case AppText.cartRoute: {
                iconName = "shopping-cart"
                break
              }
              case AppText.settingRoute: {
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
                space = {1}
                top = {1}
              >
                <FontAwesome5Icon
                  name = {iconName}
                  color = {focused ? AppColor.mainTheme : AppColor.deselectTab}
                  size = {20}
                />
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
          tabBarStyle: {
            backgroundColor: AppColor.tabBar,
            position: "absolute",
            elevation: 0,
            height: 90,
            justifyContent: "center",
            shadowColor: AppColor.shadow,
            shadowOffset: {
              width: 0,
              height: -2
            },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24
          }
        })}
      >
        <Tab.Screen
          name = {AppText.homeRoute}
          component = {HomeScreen}
        />
        <Tab.Screen
          name = {AppText.categoryRoute}
          component={CategoryScreen}
        />
        <Tab.Screen
          name = {AppText.cartRoute}
          component = {CartScreen}
        />
        <Tab.Screen
          name = {AppText.settingRoute}
          component = {SettingScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab