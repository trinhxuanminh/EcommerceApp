import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppText from "../assets/AppText";
import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import ProductDetailScreen from "../components/ProductDetailScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppStyle from "../styles";

const Stack = createStackNavigator()

const HomeNavigator = (props: any) => {

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
    const tabHiddenRoutes = [AppText.searchScreen, AppText.productDetailScreen]
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
        name = {AppText.homeScreen}
        component = {HomeScreen}
      />
      <Stack.Screen
        name = {AppText.searchScreen}
        component = {SearchScreen}
      />
      <Stack.Screen
        name = {AppText.productDetailScreen}
        component = {ProductDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator