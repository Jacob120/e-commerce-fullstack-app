export interface CreateProductDTO {
  id: string;
  name: string;
  quantity: number;
  type: string;
  category: string;
  price: number;
  onSale: boolean;
  oldPrice: number;
  outOfStock: boolean;
  topSale: boolean;
  image: string;
  gallery: Array<string>;
  size: Array<string>;
  starsRating: number;
}
