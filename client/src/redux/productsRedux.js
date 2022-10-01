import initialState from './initialState';

/* selectors */
export const getAllProducts = ({ products }) => products.products;

export const getMenProducts = ({ products }) =>
  products.products.filter((product) => product.type === 'Men');

export const getWomenProducts = ({ products }) =>
  products.products.filter((product) => product.type === 'Women');

export const getProductById = ({ products }, productId) =>
  products.products.find((product) => product.id === productId);

export const getOnSale = ({ products }) =>
  products.filter((product) => product.onSale === true);

/* actions */
const createActionName = (actionName) => `app/products/${actionName}`;

const UPDATE_REVIEW = createActionName('UPDATE_REVIEW');

/* action creators */
export const updateRating = (payload) => ({
  type: UPDATE_REVIEW,
  payload,
});

/* reducer */
function productsReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

export default productsReducer;
