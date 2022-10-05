import initialState from './initialState';

/* selectors */
export const getCartItems = ({ cart }) => cart.cart;
export const getCartCount = ({ cart }) => cart.products.length;

/* action name creator */
const createActionName = (actionName) => `app/cart/${actionName}/`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const addProductToCart = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeFromCart = (payload) => ({
  payload,
  type: REMOVE_FROM_CART,
});
export const clearCart = (payload) => ({ payload, type: CLEAR_CART });

/* reducer */
function cartReducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...statePart, action.payload];
    }
    default:
      return statePart;
  }
}

export default cartReducer;
