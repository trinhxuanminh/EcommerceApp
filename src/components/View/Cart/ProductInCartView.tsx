import React from "react";
import { 
  Box,
  HStack,
  Image,
  VStack,
  Text,
  Spacer,
  Pressable,
  Center,
  useToast
} from "native-base";
import AppColor from "../../../assets/AppColor";
import { useQuery } from "@tanstack/react-query";
import StoreService from "../../../untils/StoreService";
import ProductLoadingView from "../ProductLoadingView";
import AppText from "../../../assets/AppText";
import { useDispatch, useSelector } from "react-redux";
import { deletedProduct, settedQuantity } from "../../../reducers/carts/cartsSlice";
import AppStyle from "../../../styles";

const ProductInCartView = (props: any) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const navigation = props.navigation
  const cartId = props.cartId
  const productInCart = props.productInCart
  const productId = productInCart.productId
  const quantity = productInCart.quantity
  const isDelete = useSelector((state: any) => state.appStates.isDeleteCart)
  const { data, isLoading } = useQuery(['ProductDetail', productId], () => StoreService.getProductDetail(productId), {
    select: data => data.data
  })
  const productDetail = data

  const handleSetQuantity = (newQuantity: number) => {
    const action = settedQuantity({
      cartId: cartId,
      productId: productId,
      newQuantity: newQuantity
    })
    dispatch(action)
  }

  const handleDeleteProduct = () => {
    const action = deletedProduct({
      cartId: cartId,
      productId: productId
    })
    dispatch(action)
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Box
            bg = {AppColor.deleteToast}
            rounded = "full"
            paddingY = {2}
            paddingX = {6}
            marginTop = {70}
          >
            <Text
              color = {AppColor.darkText}
              fontSize = {17}
              fontWeight = "bold"
            >
              {AppText.deletedToast}
            </Text>
          </Box>
        )
      }
    })
  }

  return (
    <Box
      height = {130}
      width = "100%"
    >
      {
        isLoading && (
          <ProductLoadingView/>
        )
      }
      {
        productDetail && (
          <Box
            width = "100%"
            height = "100%"
          >
            <HStack
              flex = {1}
              alignItems = "center"
            >
              {
                isDelete && (
                  <Center
                    height = "100%"
                    width = {85}
                    style = {AppStyle.CommonStyle.deleteCartImage}
                  >
                    <Pressable
                      onPress = {handleDeleteProduct}
                    >
                      <Image
                        source = {require("../../../assets/image/deleteCart.png")}
                        resizeMode = "contain"
                        width = {6}
                        height = {6}
                        tintColor = {AppColor.deleteCart}
                        alt = "delete"
                      />
                    </Pressable>
                  </Center>
                )
              }
              <Pressable
                flex = {1}
                onPress = {() => {
                  navigation.navigate(AppText.productDetailScreen, {
                    productId: productId
                  })
                }}
              >
                <HStack
                  flex = {1}
                  marginX = {4}
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
                  <VStack
                    paddingLeft = {4}
                    marginY = {2}
                    space = {3}
                    flex = {1}
                    justifyContent = "space-between"
                  >
                    <Text
                      numberOfLines = {2}
                      height = {42}
                    >
                      {productDetail.title}
                    </Text>
                    <HStack>
                      <Text
                        color = {AppColor.price}
                        fontSize = {14}
                      >
                        $ {productDetail.price}
                      </Text>
                      <Spacer/>
                      <HStack
                        alignItems = "center"
                        space = {3}
                        marginRight = {2}
                      >
                        <Pressable
                          onPress = {() => handleSetQuantity(quantity - 1)}
                        >
                          <Image
                            source = {require("../../../assets/image/minusFromCart.png")}
                            alt = "add"
                            width = {5}
                            height = {5}
                            resizeMode = "contain"
                            tintColor = {AppColor.mainTheme}
                          />
                        </Pressable>
                        <Text
                          fontSize = {15}
                          fontWeight = "semibold"
                        >
                          {quantity}
                        </Text>
                        <Pressable
                          onPress = {() => handleSetQuantity(quantity + 1)}
                        >
                          <Image
                            source = {require("../../../assets/image/addToCart3.png")}
                            alt = "add"
                            width = {25}
                            height = {25}
                            resizeMode = "contain"
                            tintColor = {AppColor.mainTheme}
                          />
                        </Pressable>
                      </HStack>
                    </HStack>
                  </VStack>
                </HStack>
              </Pressable>
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