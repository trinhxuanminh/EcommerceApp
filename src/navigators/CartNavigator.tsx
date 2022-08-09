import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppText from "../assets/AppText";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppStyle from "../styles";
import ProductDetailScreen from "../components/ProductDetailScreen";
import CartScreen from "../components/CartScreen";

const Stack = createStackNavigator()

const CartNavigator = (props: any) => {

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
    const tabHiddenRoutes = [AppText.productDetailScreen]
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
        name = {AppText.cartScreen}
        component = {CartScreen}
      />
      <Stack.Screen
        name = {AppText.productDetailScreen}
        component = {ProductDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator