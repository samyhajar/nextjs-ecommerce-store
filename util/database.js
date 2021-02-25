import camelcaseKeys from 'camelcase-keys';
import postgres from 'postgres';

require('dotenv-safe').config();

const sql = postgres();

// function camelcaseRecords(records) {
//   return records.map((record) => camelcaseKeys(record));
// }

export function getProductInformation() {
  const productInfo = sql`SELECT * FROM products`;
  return productInfo;
}
//   return [
//     {
//       id: 1,
//       brand_id: 1,
//       model: ' Fender Stratocaster',
//       description: 'Vintage  ',
//       url: '/stratocaster.png',
//       price: '1000€',
//       body: 'erle',
//       shape: 'C',
//     },

//     {
//       id: 2,
//       brand_id: 1,
//       model: 'Fender Telecaster',
//       description: 'Player series',
//       url: '/telecaster.jpeg',
//       price: '640€',
//       body: 'erle',
//       shape: 'T',
//     },

//     {
//       id: 3,
//       brand_id: 1,
//       model: 'Fender Jazzmaster',
//       description: 'Classic 50s',
//       url: '/jazzmaster1.jpeg',
//       price: '994€',
//       body: 'erle',
//       shape: 'C',
//     },
//     {
//       id: 4,
//       brand_id: 2,
//       model: 'Ibanez PIA3761',
//       description: 'Envy Green',
//       url: '/envygreen.jpg',
//       price: '3.498€',
//       body: 'maple',
//       shape: 'C',
//     },
//     {
//       id: 5,
//       brand_id: 2,
//       model: 'Ibanez PGM333',
//       description: '30th Anniversary',
//       url: '/30thanny.jpg',
//       price: '2499€',
//       body: 'maple',
//       shape: 'C',
//     },
//     {
//       id: 6,
//       brand_id: 2,
//       model: 'Ibanez FR800',
//       description: 'BKF Balck Flat',
//       url: '/ibablack.jpg',
//       price: '1190€',
//       body: 'maple',
//       shape: 'C',
//     },
//     {
//       id: '6',
//       brand_id: 3,
//       model: 'Ibanez FR800',
//       description: 'BKF Black Flat',
//       url: '/ibablack.jpg',
//       price: '1190€',
//       body: 'maple',
//       shape: 'C',
//     },
//     {
//       id: 7,
//       brand_id: 3,
//       model: 'Ibanez FR800',
//       description: 'BKF Black Flat',
//       url: '/ibablack.jpg',
//       price: '1190€',
//       body: 'maple',
//       shape: 'C',
//     },
//     {
//       id: 8,
//       brand_id: '3',
//       model: 'Ibanez FR800',
//       description: 'BKF BLACK FLAT',
//       url: '/ibablack.jpg',
//       price: '1190€',
//       body: 'maple',
//       shape: 'C',
//     },
//     {
//       id: 9,
//       brand_id: 3,
//       model: 'Ibanez FR800',
//       description: 'BKF BLACK FLAT',
//       url: '/ibablack.jpg',
//       price: '1190€',
//       body: 'maple',
//       shape: 'C',
//     },
//   ];
// }
// camelcaseRecords;
