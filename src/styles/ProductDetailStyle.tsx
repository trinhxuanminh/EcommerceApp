import { StyleSheet } from "react-native";
import AppColor from "../assets/AppColor";

const ProductDetailStyle = StyleSheet.create(
  {
    addToCart: {
      shadowColor: AppColor.shadow,
      shadowOpacity: 0.25,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 0
      },
      overflow: "visible"
    }
  }
)

export default ProductDetailStyle