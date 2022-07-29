import React from "react";
import Product from "../common/Product";

interface Service {
  getAllProduct(): any
  getAllCategory(): any
  getProductsInCategory(name: string): any
  getProductDetail(id: number): any
  searchProduct(products: Product[], query: string): any
}

export default Service