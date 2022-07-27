import React from "react";
import {
  Box
} from "native-base";
import TitleView from "./View/TitleView";
import ProductsListView from "./View/ProductsListView";
import AppColor from "../assets/AppColor";
import { useQuery } from "@tanstack/react-query";
import StoreService from "../untils/StoreService";
import AppText from "../assets/AppText";
import LoadingView from "./View/LoadingView";

const HomeScreen = () => {

  const { data, isLoading } = useQuery(['AllProduct'], StoreService.getAllProduct, {
    select: data => data.data
  })
  const products = data

  return (
    <Box
      flex = {1}
      bg = {AppColor.background}
      width = "100%"
      alignSelf = "center"
    >
      <TitleView 
        titleName = {AppText.homeTitle}
        hasSearch = {true}
      />
      {
        isLoading && (
          <LoadingView/>
        )
      }
      {
        data && (
          <ProductsListView
            data = {products}
          />
        )
      }
    </Box>
  )
}

export default HomeScreen