import * as types from "./../constants/ActionType"



export const ActAddToCart = (product,quantity) => {
        return {
          type : types.ADD_TO_CART,
          product,
          quantity
        }
}

export const ActChangeMessage = (message) => {
  return {
    type : types.CHANGE_MESSAGE,
    message
  }
}
export const AtcDeleteProductInCart = (product) => {
  return {
    type : types.DELETE_PRODUCT_IN_CART,
    product
  }
}
export const AtcUpdateProductInCart = (product,quantity) => {
  return {
    type : types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  }
}