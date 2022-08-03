import React from "react";
import { 
  Box,
  HStack,
  Image
} from "native-base";
import AppColor from "../../../assets/AppColor";
import { useQuery } from "@tanstack/react-query";
import StoreService from "../../../untils/StoreService";
import LoadingView from "../LoadingView";

const ProductInCartView = (props: any) => {
  const navigation = props.navigation
  const productID = props.productID
  const { data, isLoading } = useQuery(['ProductDetail', productID], () => StoreService.getProductDetail(productID), {
    select: data => data.data
  })
  const productDetail = data

  return (
    <Box
      height = {130}
    >
      {
        isLoading && (
          <LoadingView/>
        )
      }
      {
        data && (
          <Box
            width = "100%"
            height = "100%"
          >
            <HStack
              flex = {1}
              marginX = {4}
              bg = "secondary.300"
              alignItems = "center"
            >
              <Image
                source = {
                  {
                    uri: productDetail.image
                  }
                }
                alt = "product"
                width = {98}
                height = {98}
                borderRadius = {10}
                bg = {AppColor.background}
                resizeMode = "contain"
              />
            </HStack>
            <Box
              bg = {AppColor.cartSeparation}
              height = {"px"}
            />
          </Box>
        )
      }
    </Box>
  )
}

export default ProductInCartView