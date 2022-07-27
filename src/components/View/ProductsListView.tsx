import { 
  FlatList,
  Box,
  VStack,
  Image,
  Text,
  HStack
} from "native-base";
import React from "react";
import Product from "../../common/Product";
import { Dimensions } from "react-native";

const ProductsListView = (props: any) => {
  const {width} = Dimensions.get('window')
  const numberColumns = 2
  const insetX = 16
  const space = 16
  const widthItem = (width - space * (numberColumns - 1) - insetX * 2) / numberColumns
  const heightItem = 300

  return (
    <FlatList
      data = {props.data}
      flex = {1}
      paddingTop = {2}
      paddingX = {2}
      keyExtractor = {(item: Product) => String(item.id)}
      numColumns = {2}
      ListFooterComponent = {
        <Box
          height = {32}
        />
      }
      renderItem={({
        item
      }) => 
        <Box
          margin = {2}
          bg = "white"
          width = {widthItem}
          height = {heightItem}
          borderRadius = {10}
          style = {
            {
              shadowColor: "black",
              shadowOpacity: 0.2,
              shadowRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2
              }
            }
          }
        >
          <VStack
            space = {1}
            alignItems = "center"
            marginY = {2}
            marginX = {1}
          >
            <Image
              source = {
                {
                  uri: item.image
                }
              }
              alt = "product"
              width = "100%"
              height={widthItem * 1.3}
              resizeMode = "contain"
            />
            <Text
              color = {"black"}
              fontSize = "16"
              numberOfLines = {1}
              textAlign = "left"
              width = "100%"
              marginTop = {2}
            >
              {item.title}
            </Text>
            <HStack
              width = "100%"
              height = {5}
              alignItems = "center"
            >
              <Text
                flex = {1}
              >
                $ {item.price}
              </Text>
              <Image
                source = {require("../../assets/image/addToCart.png")}
                alt = "add"
                width = {6}
                height = {6}
                marginRight = {2}
                resizeMode = "contain"
                tintColor = "#48A694"
              />
            </HStack>
          </VStack>
        </Box>
      }
    />
  )
}

export default ProductsListView