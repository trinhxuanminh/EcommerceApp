import { StyleSheet } from "react-native";
import AppColor from "../assets/AppColor";

const CommonStyle = StyleSheet.create(
  {
    tabBar: {
      backgroundColor: AppColor.tabBar,
      position: "absolute",
      elevation: 0,
      height: 90,
      justifyContent: "center",
      shadowColor: AppColor.shadow,
      shadowOffset: {
        width: 0,
        height: -2
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24
    },
    productItem: {
      shadowColor: AppColor.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 2
      }
    },
    titleScreen: {
      shadowColor: AppColor.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 2
      }
    },
    categoryItem: {
      shadowColor: AppColor.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 2
      }
    }
  }
)

export default CommonStyle