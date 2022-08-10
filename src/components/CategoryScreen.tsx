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
import CategorysListView from "./View/Category/CategorysListView";

const CategoryScreen = (props: any) => {
  const { data, isLoading } = useQuery(['AllCategory'], StoreService.getAllCategory, {
    select: data => data.data
  })
  const categorys = data
  const navigation = props.navigation

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
            navigation = {navigation}
          />
        )
      }
    </Box>
  )
}

export default CategoryScreen