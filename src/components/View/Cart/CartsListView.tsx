import { 
  Box,
  Text,
  FlatList
} from "native-base";
import React from "react";
import AppColor from "../../../assets/AppColor";
import Cart from "../../../common/Cart";
import ProductInCartView from "./ProductInCartView";

const CartsListView = (props: any) => {
  const navigation = props.navigation
  const data = props.data as Cart[]

  const convertToDate = (date: string) => {
    return new Date(date.slice(0, 10)).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
      .split(' ')
      .join(' ')
  }

  return (
    <FlatList
      data = {data}
      flex = {1}
      paddingTop = {4}
      keyExtractor = {(item, index) => index.toString()}
      ListFooterComponent = {
        <Box
          height = {32}
        />
      }
      renderItem = {({
          item 
        }) => (
          <Box
            marginBottom = {12}
          >
            <Box
              marginBottom = {2}
            >
              <Text
                marginX = {4}
                fontSize = {16}
                fontWeight = "semibold"
                color = {AppColor.placeholder}
              >
                {convertToDate(item.date)}
              </Text>
            </Box>
            <FlatList
              data = {item.products}
              keyExtractor = {(item2, index) => index.toString()}
              renderItem = {(item2) => (
                <ProductInCartView
                  navigation = {navigation}
                  cartId = {item.id}
                  productInCart = {item2.item}
                />
              )}
            />
          </Box>
        )
      }
    />
  )
}

export default CartsListView