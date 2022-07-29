import React from "react";
import {
  Box,
} from "native-base";
import AppColor from "../assets/AppColor";
import { useQuery } from "@tanstack/react-query";
import TitleView from "./View/ProductsInCategory/TitleView";
import StoreService from "../untils/StoreService";
import LoadingView from "./View/LoadingView"
import ProductsListView from "./View/ProductsListView";

const ProductsInCategoryScreen = (props: any) => {
  const { category } = props.route.params
  const { data, isLoading } = useQuery(['ProductsInCategory', category], () => StoreService.getProductsInCategory(category), {
    select: data => data.data
  })
  const products = data
  const navigation = props.navigation

  return (
    <Box
      flex = {1}
      bg = {AppColor.background}
      width  ="100%"
      alignSelf = "center"
    >
      <TitleView
        navigation = {navigation}
        category = {category}
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
            navigation = {navigation}
          />
        )
      }
    </Box>
  )
}

export default ProductsInCategoryScreen