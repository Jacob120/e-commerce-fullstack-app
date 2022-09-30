const initialState = {
  products: [
    {
      id: '1',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      oldPrice: '$55',
      outOfStock: false,
      image: '/images/products/men-boots.1.1.png',
      gallery: [
        '/images/products/men-boots.1.1.png',
        '/images/products/men-boots.1.2.png',
        '/images/products/men-boots.1.3.png',
        '/images/products/men-boots.1.4.png',
      ],
      starsRating: 4,
    },
    {
      id: '2',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      topSale: true,
      outOfStock: false,
      image: '/images/products/men-boots.2.1.png',
      starsRating: 4,
    },
    {
      id: '3',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      topSale: false,
      outOfStock: true,
      image: '/images/products/men-boots.3.1.jpg',
      starsRating: 5,
    },
    {
      id: '4',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      topSale: true,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
      starsRating: 5,
    },
    {
      id: '5',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      topSale: true,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '6',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      topSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '7',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      topSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '8',
      gender: 'Men',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      topSale: false,
      outOfStock: false,
      image: '/images/products/men-boots.1.1.png',
    },
    {
      id: '9',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      outOfStock: false,
      image: '/images/products/women-boots.1.1.jpg',
      starsRating: 4,
    },
    {
      id: '10',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
      starsRating: 4,
    },
    {
      id: '11',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '12',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '13',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '14',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: false,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '15',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      oldPrice: '$55',
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
    {
      id: '16',
      gender: 'Women',
      name: 'The North Face',
      category: 'Boots',
      price: '$35',
      onSale: true,
      outOfStock: false,
      image: '/images/products/boots-1.jpg',
    },
  ],
  user: null,
};

export default initialState;
