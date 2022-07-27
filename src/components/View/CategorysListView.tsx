import { 
  FlatList,
  Box,
  Center,
  Text
} from "native-base";
import React from "react";
import AppColor from "../../assets/AppColor";

const CategorysListView = (props: any) => {
  const heightItem = 50

  return (
    <FlatList
      data = {props.data}
      flex = {1}
      paddingTop = {2}
      paddingX = {6}
      keyExtractor = {(item: string) => item}
      ListFooterComponent = {
        <Box
          height = {32}
        />
      }
      renderItem={({
        item
      }) => 
        <Center
          marginY = {2}
          bg = {AppColor.productItem}
          flex = {1}
          height = {heightItem}
          borderRadius = {10}
          style = {
            {
              shadowColor: AppColor.shadow,
              shadowOpacity: 0.2,
              shadowRadius: 10,
              shadowOffset: {
                width: 0,
                height: 2
              }
            }
          }
        >
          <Text
            fontSize = {16}
            fontWeight = "bold"
          >
            {item}
          </Text>
        </Center>
      }
    />
  )
}

export default CategorysListView