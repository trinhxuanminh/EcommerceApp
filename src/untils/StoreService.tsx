import React from "react";
import Service from "./Service";
import axios from "axios";
import Product from "../common/Product";
import Cart from "../common/Cart";

const StoreService: Service = {
  async getAllProduct() {
    return axios.get("https://fakestoreapi.com/products")
  },

  async getAllCategory() {
    return axios.get("https://fakestoreapi.com/products/categories")
  },

  async getProductsInCategory(name: string) {
    return axios.get(`https://fakestoreapi.com/products/category/${name}`)
  },

  async getProductDetail(id: number) {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
  },

  searchProduct(products: Product[], query: string) {
    if (!query || /^\s*$/.test(query)) {
      return []
    }
    return products.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  },

  async getUserCarts(userID: number) {
    return axios.get(`https://fakestoreapi.com/carts/user/${userID}`)
  }
}

export default StoreService