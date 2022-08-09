import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppText from "../assets/AppText";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppStyle from "../styles";
import SettingScreen from "../components/SettingScreen";
import LoginScreen from "../components/LoginScreen";

const Stack = createStackNavigator()

const SettingNavigator = (props: any) => {

  const showTabBar = (display: string) => {
    props.navigation.setOptions(
      {
        tabBarStyle: {
          ...AppStyle.CommonStyle.tabBar,
          display: display
        }
      }
    )
  }

  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [AppText.loginScreen]
    const routeName: string = getFocusedRouteNameFromRoute(props.route) ?? ""
    if (tabHiddenRoutes.includes(routeName)) {
      showTabBar('none')
    } else {
      showTabBar('flex')
    }
  }, [props.navigation, props.route])

  return (
    <Stack.Navigator
      screenOptions = {
        {
          headerShown: false
        }
      }
    >
      <Stack.Screen
        name = {AppText.settingScreen}
        component = {SettingScreen}
      />
      <Stack.Screen
        name = {AppText.loginScreen}
        component = {LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default SettingNavigator