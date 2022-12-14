import React from "react"
import { 
  VStack,
  Image,
  Text,
  Box
} from "native-base"
import AppColor from "../../../assets/AppColor"
import { useSelector } from "react-redux"

const EmptyResultView = (props: any) => {
  const query = useSelector((state: any) => state.appStates.query)

  return (
    <VStack
      flex = {1}
      justifyContent = "center"
      alignItems = "center"
      space = {15}
      paddingBottom = {100}
    >
      {
        (query.length != 0) && (
          <Image
            source = {require("../../../assets/image/emptyResult.png")}
            alt = {"empty result"}
            width = {85}
            height = {85}
            marginTop = {100}
            marginRight = {15}
            resizeMode = "contain"
            tintColor = {AppColor.placeholder}
          />
        )
      }
      {
        (query.length == 0) && (
          <Image
            source = {require("../../../assets/image/emptyQuery.png")}
            alt = {"empty result"}
            width = {85}
            height = {85}
            marginTop = {100}
            marginRight = {15}
            resizeMode = "contain"
            tintColor = {AppColor.placeholder}
          />
        )
      }
      <Text
        fontSize = {20}
        textAlign = "center"
        marginX = {6}
        color = {AppColor.placeholder}
      >
        {query ? `No search results found "${query}"` : "Enter the product name"}
      </Text>
    </VStack>
  )
}

export default EmptyResultView