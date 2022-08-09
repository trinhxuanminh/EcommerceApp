import { createSlice } from "@reduxjs/toolkit"
import Cart from "../../common/Cart"

const initialState = {
  value: Array<Cart>(0)
}

const getNextCartId = (carts: Cart[]) => {
  const maxId = carts.reduce((maxId, cart) => Math.max(cart.id, maxId), -1)
  return maxId + 1
}

const getDateNow = () => {
  return (new Date()).toJSON().slice(0, 10)
}

const getUserCarts = (carts: Cart[], userId: number) => {
  return carts.filter((cart) => {
    return cart.userId == userId
  })
}

const getTodayUserCart = (carts: Cart[], userId: number) => {
  const date = getDateNow()
  const userCarts = getUserCarts(carts, userId)
  const todayCarts = userCarts.filter((cart) => {
    return cart.date == date
  })
  if (todayCarts.length == 0) {
    return null
  }
  return todayCarts[0]
}

const getProductInCartById = (productId: number, cart: Cart) => {
  const existProducts = cart.products.filter((product) => {
    return product.productId == productId
  })
  if (existProducts.length == 0) {
    return null
  }
  return existProducts[0]
}

const getCartById = (carts: Cart[], cartId: number) => {
  return carts.filter((cart) => {
    return cart.id == cartId
  })[0]
}

const handleDeletedProduct = (carts: Cart[], cartId: number, productId: number) => {
  const newCarts = carts.map((cart) => {
    if (cart.id == cartId) {
      return {
        ...cart,
        products: cart.products.filter((product) => {
          return product.productId != productId
        })
      }
    }
    return cart
  })
  return newCarts.filter((cart) => {
    return cart.products.length != 0
  })
}

const handleSetQuantity = (carts: Cart[], cartId: number, productId: number, newQuantity: number) => {
  if (newQuantity <= 0) {
    return handleDeletedProduct(carts, cartId, productId)
  }
  return carts.map((cart) => {
    if (cart.id == cartId) {
      return {
        ...cart,
        products: cart.products.map((product) => {
          if (product.productId == productId) {
            return {
              ...product,
              quantity: newQuantity
            }
          }
          return product
        })
      }
    }
    return cart
  })
}

const handleAddProduct = (carts: Cart[], userId: number, productId: number, quantity: number) => {
  const todayCart = getTodayUserCart(carts, userId)
  if (todayCart == null) {
    const date = getDateNow()
    return [
      {
        id: getNextCartId(carts),
        date: date,
        userId: userId,
        products: [{
          productId: productId,
          quantity: quantity
        }]
      },
      ...carts
    ]
  }
  const existProduct = getProductInCartById(productId, todayCart)
  if (existProduct == null) {
    return carts.map((cart) => {
      if (cart.id == todayCart.id) {
        return {
          ...cart,
          products: [
            {
              productId: productId,
              quantity: quantity
            },
            ...cart.products
          ]
        }
      }
      return cart
    })
  }
  return handleSetQuantity(carts, todayCart.id, productId, existProduct.quantity + quantity)
}

const cartsSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    addedProduct(state, action) {
      const userId = Number(action.payload.userId)
      const productId = Number(action.payload.productId)
      const quantity = Number(action.payload.quantity)
      const newCarts = handleAddProduct(state.value, userId, productId, quantity)
      return {
        ...state,
        value: newCarts
      }
    },

    settedQuantity(state, action) {
      const cartId = Number(action.payload.cartId)
      const productId = Number(action.payload.productId)
      const newQuantity = Number(action.payload.newQuantity)
      const newCarts = handleSetQuantity(state.value, cartId, productId, newQuantity)
      return {
        ...state,
        value: newCarts
      }
    },

    deletedProduct(state, action) {
      const cartId = Number(action.payload.cartId)
      const productId = Number(action.payload.productId)
      const newCarts = handleDeletedProduct(state.value, cartId, productId)
      return {
        ...state,
        value: newCarts
      }
    }
  }
})

const { actions, reducer } = cartsSlice
export const { addedProduct, settedQuantity, deletedProduct } = actions
export const cartsReducer = reducer