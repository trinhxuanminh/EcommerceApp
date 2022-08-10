import Product from "../common/Product";
import Cart from "../common/Cart"

interface Service {
  getAllProduct(): any
  getAllCategory(): any
  getProductsInCategory(name: string): any
  getProductDetail(id: number): any
  searchProduct(products: Product[], query: string): any
  getUserDetail(id: Number): any
  getAllUser(): any
  login(username: string, password: string): any
  getUserCarts(carts: Cart[], userId: number): Cart[]
  getProductLengthInCart(carts: Cart[], userId: number): number
  getUserId(users: any, username: string): number|null
}

export default Service