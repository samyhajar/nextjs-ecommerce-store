const products = [
  {
    model: 'Fender Stratocaster',
    description: 'Vintage',
    url: '/stratocaster.png',
    price: 1000,
    body: 1,
    shape: 1,
    brand: 1,
  },
  {
    model: 'Fender Telecaster',
    description: 'Player Series',
    url: '/telecaster.jpeg',
    price: 640,
    body: 1,
    shape: 1,
    brand: 1,
  },
  {
    model: 'Fender Jazzmaster',
    description: 'Classic 50s',
    url: '/jazzmaster1.jpeg',
    price: 994,
    body: 1,
    shape: 1,
    brand: 1,
  },
  {
    model: 'Ibanez PIA3761',
    description: 'Envy Green',
    url: '/envygreen.jpg',
    price: 3498,
    body: 1,
    shape: 1,
    brand: 2,
  },
  {
    model: 'Ibanez PGM333',
    description: '30th Anniversary',
    url: '/30thanny.jpg',
    price: 2499,
    body: 1,
    shape: 1,
    brand: 2,
  },
  {
    model: 'Ibanez FR800',
    description: 'BKF Balck Flat',
    url: '/ibablack.jpg',
    price: 1190,
    body: 1,
    shape: 1,
    brand: 2,
  },
];

exports.up = async (sql) => {
  await sql`
	INSERT INTO products
	${sql(
    products,
    'model',
    'description',
    'url',
    'price',
    'body',
    'shape',
    'brand',
  )}
	`;
};

exports.down = async (sql) => {
  await sql`
		DELETE FROM
		products
		`;
};
