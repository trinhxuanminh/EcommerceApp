import React from "react";
import Service from "./Service";
import axios from "axios";

const StoreService: Service = {
  async getAllProduct() {
    return axios.get("https://fakestoreapi.com/products")
  },

  async getAllCategory() {
    return axios.get("https://fakestoreapi.com/products/categories")
  }
}

export default StoreService