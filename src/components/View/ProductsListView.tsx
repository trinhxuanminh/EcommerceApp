import { 
  FlatList,
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Pressable,
  ZStack
} from "native-base";
import React, { useState } from "react";
import Product from "../../common/Product";
import { Dimensions } from "react-native";
import AppColor from "../../assets/AppColor";
import AppStyle from "../../styles";
import AppText from "../../assets/AppText";
import AddProductView from "./AddProductView";

const ProductsListView = (props: any) => {
  const navigation = props.navigation
  const [showAddView, setShowAddView] = useState(false)
  const {width} = Dimensions.get('window')
  const numberColumns = 2
  const insetX = 16
  const space = 16
  const widthItem = (width - space * (numberColumns - 1) - insetX * 2) / numberColumns
  const heightItem = 300
  const [addProduct, setAddProduct] = useState<Product|null>(null)

  return (
    <ZStack
      flex = {1}
    > 
      <FlatList
        data = {props.data}
        width = "100%"
        height = "100%"
        paddingTop = {2}
        paddingX = {2}
        keyExtractor = {(item: Product) => String(item.id)}
        numColumns = {2}
        showsVerticalScrollIndicator = {false}
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
              margin = {2}
              bg = {AppColor.productItem}
              width = {widthItem}
              height = {heightItem}
              borderRadius = {10}
              style = {AppStyle.CommonStyle.productItem}
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
                  height = {widthItem * 1.3}
                  resizeMode = "contain"
                />
                <Text
                  color = {AppColor.lightText}
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
                    fontSize = {14}
                    color = {AppColor.price}
                    flex = {1}
                  >
                    $ {item.price}
                  </Text>
                  <Pressable
                    onPress = {() => {
                      setAddProduct(item)
                      setShowAddView(!showAddView)
                    }}
                  >
                    <Image
                      source = {require("../../assets/image/addToCart1.png")}
                      alt = "add"
                      width = {6}
                      height = {6}
                      marginRight = {2}
                      resizeMode = "contain"
                      tintColor = {AppColor.theme}
                    />
                  </Pressable>
                </HStack>
              </VStack>
            </Box>
          </Pressable>
        }
      />
      {
        showAddView && addProduct && (
          <AddProductView
            product = {addProduct!}
            hideView = {() => setShowAddView(!showAddView)}
          />
        )
      }
    </ZStack>
  )
}

export default ProductsListView