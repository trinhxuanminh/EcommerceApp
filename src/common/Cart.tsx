import React from "react";

interface Cart {
  id: number,
  userID: number,
  date: string,
  products: Array<{
    productId: number,
    quantity: number
  }>
}

export default Cart