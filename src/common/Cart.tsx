import React from "react";

interface Cart {
  id: number,
  userId: number,
  date: string,
  products: Array<{
    productId: number,
    quantity: number
  }>
}

export default Cart