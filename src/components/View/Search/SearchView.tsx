import React from "react";
import { 
  Box, 
  HStack,
  Input,
  VStack,
  Image,
  Pressable
} from "native-base";
import AppColor from "../../../assets/AppColor";
import AppText from "../../../assets/AppText";
import { Keyboard } from "react-native";
import { searched } from "../../../reducers/filters/filtersSlice";
import { useDispatch } from "react-redux";

const SearchView = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = React.useState("")

  const handleChange = (newQuery: string) => setQuery(newQuery)

  const handleSubmitEditing = () => {
    Keyboard.dismiss
    const action = searched({
      query: query
    })
    dispatch(action)
  }

  const handleCleanText = () => {
    Keyboard.emit
    setQuery("")
  }

  return (
    <Box>
      <VStack
        marginTop = {7}
        space = {2}
      >
        <HStack
          marginLeft = {51}
          marginRight = {4}
          height = {37}
          alignItems = "center"
        >
          <Input
            variant = "unstyled"
            height = "100%"
            flex = {1}
            justifyContent = "center"
            alignItems = "center"
            placeholder = {AppText.searchPlaceholder}
            placeholderTextColor = {AppColor.placeholder}
            fontSize = {18}
            color = {AppColor.searchText}
            onChangeText = {handleChange}
            returnKeyType = "search"
            onSubmitEditing = {handleSubmitEditing}
            defaultValue = {query}
          />
          {
            (!query == false) && (
              <Pressable
                onPress = {handleCleanText}
              >
                <Image
                  source = {require("../../../assets/image/cleanText.png")}
                  resizeMode = "contain"
                  width = {5}
                  height = {5}
                  tintColor = {AppColor.searchCleanText}
                  alt = "close"
                />
              </Pressable>
            )
          }
        </HStack>
        <Box
          bg = {AppColor.searchSeparation}
          height = {"px"}
          marginX = {4}
        />
      </VStack>
    </Box>
  )
}

export default SearchView