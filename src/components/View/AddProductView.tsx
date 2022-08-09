import React, { useRef, useState } from "react"
import { 
  Box, 
  Center, 
  Pressable, 
  VStack, 
  ZStack,
  Text,
  Image,
  HStack,
  Spacer,
  Button,
  useToast
} from "native-base"
import { useDispatch, useSelector } from "react-redux";
import { addedProduct } from "../../reducers/carts/cartsSlice";
import AppColor from "../../assets/AppColor";
import { BlurView } from "@react-native-community/blur";
import AppStyle from "../../styles";
import AppText from "../../assets/AppText";

const AddProductView = (props: any) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const hideView = props.hideView
  const product = props.product
  const userId = useSelector((state: any) => state.users.userId)
  const [quantity, setQuantity] = useState(1)
  const [focusMinus, setFocusMinus] = useState(false)

  const handleAddProduct = () => {
    const action = addedProduct({
      productId: product.id,
      quantity: quantity,
      userId: userId
    })
    dispatch(action)
    toast.show({
      placement: "top",
      render: () => {
        return (
          <Box
            bg = {AppColor.addToast}
            rounded = "full"
            paddingY = {2}
            paddingX = {6}
            marginTop = {70}
          >
            <Text
              color = {AppColor.text}
              fontSize = {17}
              fontWeight = "bold"
            >
              {AppText.addedToast}
            </Text>
          </Box>
        )
      }
    })
    hideView()
  }

  const handleSetQuantity = (newQuantity: number) => {
    setFocusMinus(newQuantity > 1)
    setQuantity(newQuantity)
  }

  return (
    <Pressable
      onPress = {hideView}
      flex = {1}
    >
      <ZStack
        flex = {1}
      >
        <BlurView
          style = {AppStyle.CommonStyle.blurView}
          blurAmount = {30}
          blurRadius = {30}
          blurType = "dark"
          reducedTransparencyFallbackColor = {AppColor.searchBackground}
        />
        <Center
          width = {"100%"}
          height = {"100%"}
        >
          <Pressable>
            {
              !userId && (
                <Box
                  width = {300}
                  height = {150}
                  marginBottom = {100}
                  bg = {AppColor.background}
                  borderRadius = {16}
                  padding = {4}
                >
                  <VStack
                    alignItems = "center"
                  >
                    <Text
                      width = "100%"
                      numberOfLines = {2}
                      fontSize = {18}
                      fontWeight = "medium"
                      textAlign = "center"
                      color = {AppColor.text}
                      paddingX = {6}
                    >
                      {AppText.guestAddCart}
                    </Text>
                    <Button
                      marginTop = {4}
                      width = {200}
                      height = {41}
                      _text = {{
                        fontSize: 18,
                        fontWeight: "semibold",
                        color: "white"
                      }}
                      bg = {AppColor.mainTheme}
                      onPress = {hideView}
                    >
                      {AppText.acceptAction}
                    </Button>
                  </VStack>
                </Box>
              )
            }
            {
              userId && (
                <Box
                  width = {300}
                  height = {410}
                  marginBottom = {100}
                  bg = {AppColor.background}
                  borderRadius = {16}
                  padding = {4}
                >
                  <VStack
                    alignItems = {"center"}
                  >
                    <HStack>
                      <Text
                        flex = {1}
                        height = {39}
                        fontWeight = "bold"
                        fontSize = {22}
                        textAlign = "center"
                        color = {AppColor.text}
                        marginLeft = {7}
                      >
                        {AppText.addProductTitle}
                      </Text>
                      <Pressable
                        onPress = {hideView}
                      >
                        <Image
                          source = {require("../../assets/image/cancel.png")}
                          resizeMode = "contain"
                          width = {7}
                          height = {7}
                          tintColor = {AppColor.searchTint}
                          alt = "cancel"
                        />
                      </Pressable>
                    </HStack>
                    <Box
                      width = "100%"
                      height = {"px"}
                      bg = {AppColor.cartSeparation}
                    />
                    <Image
                      source = {
                        {
                          uri: product.image
                        }
                      }
                      alt = "product"
                      bg = {AppColor.background}
                      width = {150}
                      height = {150}
                      marginY = {4}
                      resizeMode = "contain"
                    />
                    <Text
                      width = "100%"
                      numberOfLines = {2}
                      fontSize = {18}
                      color = {AppColor.text}
                    >
                      {product.title}
                    </Text>
                    <HStack
                      marginTop = {5}
                      space = {3}
                      alignItems = "center"
                    >
                      <Text
                        fontSize = {14}
                        flex = {1}
                        color = {AppColor.price}
                      >
                        $ {product.price}
                      </Text>
                      <Spacer/>
                      <Pressable
                        isDisabled = {!focusMinus}
                        onPress = {() => handleSetQuantity(quantity - 1)}
                      >
                        <Image
                          source = {require("../../assets/image/minusFromCart.png")}
                          alt = "add"
                          width = {5}
                          height = {5}
                          resizeMode = "contain"
                          tintColor = {focusMinus ? AppColor.mainTheme : AppColor.deselectTab}
                        />
                      </Pressable>
                      <Text
                        fontSize = {15}
                        fontWeight = "semibold"
                      >
                        {quantity}
                      </Text>
                      <Pressable
                        onPress = {() => handleSetQuantity(quantity + 1)}
                      >
                        <Image
                          source = {require("../../assets/image/addToCart3.png")}
                          alt = "add"
                          width = {25}
                          height = {25}
                          resizeMode = "contain"
                          tintColor = {AppColor.mainTheme}
                        />
                      </Pressable>
                    </HStack>
                    <Button
                      marginTop = {4}
                      width = {200}
                      height = {41}
                      _text = {{
                        fontSize: 18,
                        fontWeight: "semibold",
                        color: "white"
                      }}
                      bg = {AppColor.mainTheme}
                      onPress = {() => handleAddProduct()}
                    >
                      {AppText.addAction}
                    </Button>
                  </VStack>
                </Box>
              )
            }
          </Pressable>
        </Center>
      </ZStack>
    </Pressable>
  )
}

export default AddProductView