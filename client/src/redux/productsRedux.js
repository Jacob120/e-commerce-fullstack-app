/* selectors */
export const getAllProducts = ({ products }) => products;

export const getMenProducts = ({ products }) =>
  products.filter((product) => product.gender === 'Men');

export const getWomenProducts = ({ products }) =>
  products.filter((product) => product.gender === 'Women');

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
