/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getProductById = ({ products }, productId) =>
  products.find((product) => product.id === productId);
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
function productsReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

export default productsReducer;
