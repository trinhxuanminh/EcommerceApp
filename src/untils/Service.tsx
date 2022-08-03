import React from "react";
import Product from "../common/Product";
import Cart from "../common/Cart"

interface Service {
  getAllProduct(): any
  getAllCategory(): any
  getProductsInCategory(name: string): any
  getProductDetail(id: number): any
  searchProduct(products: Product[], query: string): any
  getUserCarts(userID: number): any
}

export default Service