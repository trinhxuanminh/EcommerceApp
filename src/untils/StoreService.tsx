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

  async getAllUser() {
    return axios.get(`https://fakestoreapi.com/users`)
  },

  async login(username: string, password: string) {
    return axios.post('https://fakestoreapi.com/auth/login', {
      username: username,
      password: password
    })
  },

  searchProduct(products: Product[], query: string) {
    if (!query || /^\s*$/.test(query)) {
      return []
    }
    return products.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  },

  getUserCarts(carts: Cart[], userId: number|null) {
    if (!userId) {
      return []
    }
    return carts.filter((cart) => {
      return cart.userId == userId
    })
  },

  getProductLengthInCart(carts: Cart[], userId: number|null) {
    if (!userId) {
      return 0
    }
    const userCarts = this.getUserCarts(carts, userId)
    var count = 0
    userCarts.map((cart) => {
      count += cart.products.length
    })
    return count
  },

  getUserId(users: any, username: string) {
    const filterUsers = users.filter((user: any) => {
      return user.username == username
    })
    if (filterUsers.length == 0) {
      return null
    }
    return filterUsers[0].id
  }
}

export default StoreService