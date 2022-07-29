import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "../components/CartScreen";
import SettingScreen from "../components/SettingScreen";
import { 
  VStack, 
  Text 
} from "native-base";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import AppText from "../assets/AppText";
import AppColor from "../assets/AppColor";
import HomeNavigator from "./HomeNavigator";
import CategoryNavigator from "./CategoryNavigator";
import AppStyle from "../styles";

const Tab = createBottomTabNavigator()

const BottomTab = () => {
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
          component = {CartScreen}
        />
        <Tab.Screen
          name = {AppText.settingNavigator}
          component = {SettingScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTab