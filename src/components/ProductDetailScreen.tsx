import React, { useState } from "react";
import AppColor from "../assets/AppColor";
import { 
  Box,
  ZStack,
  Pressable,
  Image,
  ScrollView,
  VStack,
  Text,
  HStack
} from "native-base";
import StoreService from "../untils/StoreService";
import { useQuery } from "@tanstack/react-query";
import LoadingView from "./View/LoadingView";
import { Rating } from "react-native-ratings";
import AppStyle from "../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddProductView from "./View/AddProductView";

const ProductDetailScreen = (props: any) => {
  const insets = useSafeAreaInsets()
  const [showAddView, setShowAddView] = useState(false)
  const { productId } = props.route.params
  const { data, isLoading } = useQuery(['ProductDetail', productId], () => StoreService.getProductDetail(productId), {
    select: data => data.data
  })
  const productDetail = data
  const navigation = props.navigation

  return (
    <Box
      safeAreaTop
      flex = {1}
      bg = {AppColor.background}
      width = "100%"
      alignSelf = "center"
    >
      <ZStack
        flex = {1}
      >
        {
          isLoading && (
            <LoadingView/>
          )
        }
        {
          productDetail && (
            <ScrollView
              width = "100%"
              height = "100%"
            >
              <Box>
                <VStack
                  marginX = {4}
                  space = {2}
                >
                  <Image
                    source = {
                      {
                        uri: productDetail.image
                      }
                    }
                    alt = "product"
                    height = {350}
                    width = {300}
                    alignSelf = "center"
                    resizeMode = "contain"
                  />
                  <Text
                    textAlign = "center"
                    color = {AppColor.text}
                    fontWeight = "semibold"
                    fontSize = {"3xl"}
                    marginX = {4}
                  >
                    {productDetail.title}
                  </Text>
                  <Text
                    color = {AppColor.placeholder}
                    alignSelf = "center"
                  >
                    - {productDetail.category} -
                  </Text>
                  <HStack
                    justifyContent = "space-between"
                    alignItems = "center"
                  >
                    <Text
                      color = {AppColor.price}
                      fontSize = {20}
                    >
                      $ {productDetail.price}
                    </Text>
                    <HStack
                      space = {1}
                    >
                      <Rating
                        type = 'custom'
                        startingValue = {productDetail.rating.rate}
                        imageSize = {20}
                        ratingColor = {AppColor.mainTheme}
                        showRating = {false}
                        readonly = {true}
                      />
                      <Text
                        color = {AppColor.placeholder}
                      >
                        ({productDetail.rating.count})
                      </Text>
                    </HStack>
                  </HStack>
                  <Text
                    marginTop = {4}
                    fontSize = {18}
                    marginBottom = {32}
                  >
                    {productDetail.description}
                  </Text>
                </VStack>
              </Box>
            </ScrollView>
            
          )
        }
        {
          productDetail && (
            <Box
              bg = {
                {
                  linearGradient: {
                    colors: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 1.0)', 'rgba(255, 255, 255, 1.0)'],
                    start: [0, 0],
                    end: [0, 1]
                  }
                }
              }
              height = {insets.bottom + 120}
              bottom = {0}
              width = "100%"
            >
              <Box
                height = {50}
                borderRadius = {"md"}
                marginTop = {100}
                marginX = {4}
                bg = {AppColor.addToCartDetail}
                style = {AppStyle.ProductDetailStyle.addToCart}
                justifyContent = "center"
                bottom = {insets.bottom + 10}
              >
                <HStack
                  justifyContent = "space-between"
                >
                  <Text
                    fontWeight = {"bold"}
                    fontSize = {18}
                    marginLeft = {5}
                    color = {AppColor.addToCartText}
                  >
                    Add to cart
                  </Text>
                  <Pressable
                    onPress = {() => setShowAddView(!showAddView)}
                  >
                    <Image
                      source = {require("../assets/image/addToCart2.png")}
                      alt = "add"
                      width = {6}
                      height = {6}
                      marginTop = {1}
                      marginRight = {15}
                      resizeMode = "contain"
                    />
                  </Pressable>
                </HStack>
              </Box>
            </Box>
          )
        }
        <Pressable
          onPress = {() => {
            navigation.goBack()
          }}
        >
          <Image
            source = {require("../assets/image/back.png")}
            resizeMode = "contain"
            width = {6}
            height = {6}
            marginLeft = {4}
            marginTop = {2}
            tintColor = {AppColor.searchTint}
            alt = "search"
          />
        </Pressable>

        {
          showAddView && productDetail && (
            <AddProductView
              product = {productDetail}
              hideView = {() => setShowAddView(!showAddView)}
            />
          )
        }
      </ZStack>
    </Box>
  )
}

export default ProductDetailScreen