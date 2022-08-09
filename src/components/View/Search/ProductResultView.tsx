import { 
  FlatList,
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Pressable,
  Spacer
} from "native-base";
import React, { useState } from "react";
import Product from "../../../common/Product";
import AppColor from "../../../assets/AppColor";
import AppText from "../../../assets/AppText";
import { Rating } from "react-native-ratings";

const ProductResultView = (props: any) => {
  const navigation = props.navigation
  const data = props.data

  return (
    <FlatList
      data = {data}
      flex = {1}
      paddingTop = {2}
      paddingX = {4}
      showsVerticalScrollIndicator = {false}
      keyExtractor = {(item: Product) => String(item.id)}
      ListFooterComponent = {
        <Box
          height = {32}
        />
      }
      renderItem={({
        item
      }) => 
        <Pressable
          onPress = {() => {
            navigation.navigate(AppText.productDetailScreen, {
              productId: item.id
            })
          }}
        >
          <Box
            flex = {1}
            height = {150}
            marginY = {3}
          >
            <HStack
              flex = {1}
              alignItems = "center"
            >
              <Image
                source = {
                  {
                    uri: item.image
                  }
                }
                bg = {AppColor.background}
                alt = "product"
                height = {"100%"}
                width = {150 / 1.3}
                resizeMode = "contain"
                borderRadius = {10}
              />
              <Box
                bg = {AppColor.productResultItem}
                height = {109}
                flex = {1}
                borderRightRadius = {10}
              >
                <VStack
                  marginY = {2}
                  marginX = {4}
                  flex = {1}
                  space = {1}
                >
                  <Text
                    fontSize = {15}
                    fontWeight = "semibold"
                    numberOfLines = {2}
                    color = {AppColor.darkText}
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize = {13}
                    fontWeight = "normal"
                    numberOfLines = {1}
                    color = {AppColor.placeholder}
                  >
                    {item.category}
                  </Text>
                  <HStack
                    flex = {1}
                    alignItems = "center"
                  >
                    <Text
                      fontSize = {14}
                      fontWeight = "normal"
                      color = {AppColor.price}
                    >
                      $ {item.price}
                    </Text>
                    <Spacer/>
                    <Rating
                      type = "custom"
                      startingValue = {item.rating.rate}
                      imageSize = {15}
                      showRating = {false}
                      readonly = {true}
                      tintColor = {AppColor.productResultItem}
                    />
                  </HStack>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </Pressable>
      }
    />
  )
}

export default ProductResultView