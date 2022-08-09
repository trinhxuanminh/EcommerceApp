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

  async getUserDetail(id: Number) {
    return axios.get(`https://fakestoreapi.com/users/${id}`)
  },

  searchProduct(products: Product[], query: string) {
    if (!query || /^\s*$/.test(query)) {
      return []
    }
    return products.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  },

  getUserCarts(carts: Cart[], userId: number) {
    if (isNaN(userId)) {
      return []
    }
    return carts.filter((cart) => {
      return cart.userId == userId
    })
  },

  getProductLengthInCart(carts: Cart[], userId: number) {
    if (isNaN(userId)) {
      return 0
    }
    const userCarts = this.getUserCarts(carts, userId)
    var count = 0
    userCarts.map((cart) => {
      count += cart.products.length
    })
    return count
  }
}

export default StoreService