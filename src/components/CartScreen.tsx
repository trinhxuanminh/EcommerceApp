import React from "react";
import {
  Box, 
  Center,
  Text
} from "native-base";
import AppColor from "../assets/AppColor";
import TitleView from "./View/TitleView";
import AppText from "../assets/AppText";
import StoreService from "../untils/StoreService";
import CartsListView from "./View/Cart/CartsListView";
import { useSelector } from "react-redux";

const CartScreen = (props: any) => {
  const navigation = props.navigation
  const userId = useSelector((state: any) => state.users.userId)
  const carts = useSelector((state: any) => state.carts.value)
  const isDelete = useSelector((state: any) => state.appStates.isDeleteCart)
  const userCarts = StoreService.getUserCarts(carts, userId)

  return (
    <Box
      flex = {1}
      bg = {{
        linearGradient: {
          colors: [AppColor.gradient1, AppColor.gradient2],
          start: [1, 1],
          end: [0, 0.5]
        }
      }}
      width = "100%"
      alignSelf = "center"
    >
      <TitleView 
        titleName = {AppText.cartTitle}
        hasDelete = {!isDelete && !!userId}
        hasCancel = {isDelete && !!userId}
      />
      {
        !userId && (
          <Center
            flex = {1}
            marginBottom = {120}
            paddingX = {6}
          >
            <Text
              color = {AppColor.placeholderMessage}
              fontSize = {17}
              fontWeight = "medium"
            >
              {AppText.guestCart}
            </Text>
          </Center>
        )
      }
      {
        !!userId && carts && (
          <CartsListView
            data = {userCarts}
            navigation = {navigation}
          />
        )
      }
    </Box>
  )
}

export default CartScreen