import initialState from './initialState';

/* selectors */
export const getCartItems = ({ cart }) => cart.cart;
export const getCartCount = ({ cart }) => cart.products.length;

/* action name creator */
const createActionName = (actionName) => `app/cart/${actionName}/`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProductToCart = (payload) => ({ payload, type: ADD_PRODUCT });

/* reducer */
function cartReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...statePart, cart: action.payload };
    }
    default:
      return statePart;
  }
}

export default cartReducer;
