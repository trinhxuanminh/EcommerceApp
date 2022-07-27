import React from "react";
import {
  Box
} from "native-base";
import AppColor from "../assets/AppColor";
import TitleView from "./View/TitleView";
import AppText from "../assets/AppText";
import { useQuery } from "@tanstack/react-query";
import StoreService from "../untils/StoreService";
import LoadingView from "./View/LoadingView";
import CategorysListView from "./View/CategorysListView";

const CategoryScreen = () => {

  const { data, isLoading } = useQuery(['AllCategory'], StoreService.getAllCategory, {
    select: data => data.data
  })
  const categorys = data

  return (
    <Box
      flex = {1}
      bg = {AppColor.background}
      width  ="100%"
      alignSelf = "center"
    >
      <TitleView 
        titleName = {AppText.categoryTitle}
      />
      {
        isLoading && (
          <LoadingView/>
        )
      }
      {
        data && (
          <CategorysListView
            data = {categorys}
          />
        )
      }
    </Box>
  )
}

export default CategoryScreen