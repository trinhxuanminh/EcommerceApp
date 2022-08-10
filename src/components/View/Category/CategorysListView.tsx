import { 
  FlatList,
  Box,
  Center,
  Text,
  Pressable
} from "native-base";
import React from "react";
import AppColor from "../../../assets/AppColor";
import AppText from "../../../assets/AppText";
import AppStyle from "../../../styles";

const CategorysListView = (props: any) => {
  const heightItem = 50
  const navigation = props.navigation

  return (
    <FlatList
      data = {props.data}
      flex = {1}
      paddingTop = {2}
      paddingX = {6}
      showsVerticalScrollIndicator = {false}
      keyExtractor = {(item: string) => item}
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
            navigation.navigate(AppText.productsInCategoryScreen, {
              category: item
            })
          }}
        >
          <Center
            marginY = {2}
            bg = {AppColor.categoryItem}
            flex = {1}
            height = {heightItem}
            borderRadius = {10}
            style = {AppStyle.CommonStyle.categoryItem}
          >
            <Text
              fontSize = {16}
              fontWeight = "bold"
              color = {AppColor.lightText}
            >
              {item}
            </Text>
          </Center>
        </Pressable>
      }
    />
  )
}

export default CategorysListView