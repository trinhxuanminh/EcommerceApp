import React from "react";
import {
  Box
} from "native-base";
import AppColor from "../assets/AppColor";
import TitleView from "./View/TitleView";
import AppText from "../assets/AppText";
import LoadingView from "./View/LoadingView";
import StoreService from "../untils/StoreService";
import { useQuery } from "@tanstack/react-query";
import CartsListView from "./View/Cart/CartsListView";

const CartScreen = (props: any) => {
  const userID = 1
  const navigation = props.navigation
  const { data, isLoading } = useQuery(['UserCarts', userID], () => StoreService.getUserCarts(userID), {
    select: data => data.data
  })
  const carts = data

  return (
    <Box
      flex = {1}
      bg = {AppColor.background}
      width  ="100%"
      alignSelf = "center"
    >
      <TitleView 
        titleName = {AppText.cartTitle}
      />
      {
        isLoading && (
          <LoadingView/>
        )
      }
      {
        carts && (
          <CartsListView
            data = {carts}
            navigation = {navigation}
          />
        )
      }
    </Box>
  )
}

export default CartScreen