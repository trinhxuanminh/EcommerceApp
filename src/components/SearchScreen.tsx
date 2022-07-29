import React from "react";
import { 
  Box,
  StatusBar
} from "native-base";
import AppColor from "../assets/AppColor";
import SearchView from "./View/Search/SearchView";
import CloseView from "./View/Search/CloseView";
import EmptyResultView from "./View/Search/EmptyResultView";
import ProductResultView from "./View/Search/ProductResultView";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import StoreService from "../untils/StoreService";
import LoadingView from "./View/LoadingView";

const SearchScreen = (props: any) => {
  const query = useSelector((state: any) => state.filters.query)
  const navigation = props.navigation

  const { data, isLoading } = useQuery(['AllProduct', query], StoreService.getAllProduct, {
    select: data => StoreService.searchProduct(data.data, query)
  })
  const products = data

  return (
    <Box
      safeAreaTop
      flex = {1}
      bg = {AppColor.searchBackground}
      width = "100%"
      alignSelf = "center"
    > 
      <StatusBar
        barStyle = {"light-content"}
      />
      <Box
        flex = {1}
      >
        <CloseView
          navigation = {navigation}
        />
        <SearchView/>
        {
          isLoading && (
            <LoadingView/>
          )
        }
        {
          (isLoading == false) && (data == false) && (
            <EmptyResultView/>
          )
        }
        {
          data && (
            <ProductResultView
              data = {products}
              navigation = {navigation}
            />
          )
        }
      </Box>
    </Box>
  )
}

export default SearchScreen