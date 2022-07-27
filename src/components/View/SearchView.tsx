import React from "react";
import { 
  Box, 
  HStack,
  Input
} from "native-base";
import { Image } from "react-native";

const SearchView = () => {
  return (
    <Box>
      <Box
        bg = "white"
        height = {50}
        margin = {4}
        borderRadius = {"md"}
        style = {
          {
            shadowColor: "black",
            shadowOpacity: 0.15,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowRadius: 20
          }
        }
      >
        <HStack
          flex = {1}
          alignItems = "center"
          marginX = {3}
        >
          <Image
            source = {require("../../../assets/image/search.png")}
            resizeMode = "contain"
            style = {
              {
                tintColor: "black",
                width: 24,
                height: 24
              }
            }
          />
          <Input
            flex = {1}
            fontSize = "16"
            placeholder = "Search..."
            placeholderTextColor = "#BCBCBC"
            variant = "unstyled"
          />
        </HStack>
      </Box>
    </Box>
  )
}

export default SearchView