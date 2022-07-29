import { 
  FlatList,
  Box,
  VStack,
  Image,
  Text,
  HStack,
  Pressable
} from "native-base";
import React from "react";
import Product from "../../../common/Product";
import { Dimensions } from "react-native";
import AppColor from "../../../assets/AppColor";
import AppStyle from "../../../styles";
import AppText from "../../../assets/AppText";

const ProductResultView = (props: any) => {
  const navigation = props.navigation
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
        <Pressable
          onPress = {() => {
            navigation.navigate(AppText.productDetailScreen, {
              productID: item.id
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
                color = {AppColor.text}
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
                  color = {AppColor.price}
                  flex = {1}
                >
                  $ {item.price}
                </Text>
                <Image
                  source = {require("../../../assets/image/add.png")}
                  alt = "add"
                  width = {6}
                  height = {6}
                  marginRight = {2}
                  resizeMode = "contain"
                  tintColor = {AppColor.mainTheme}
                />
              </HStack>
            </VStack>
          </Box>
        </Pressable>
      }
    />
  )
}

export default ProductResultView