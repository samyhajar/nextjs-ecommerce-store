import { EALREADY } from 'constants';

const brand = [
  { id: '1', name: 'Fender' },
  { id: '2', name: 'Yamaha' },
  { id: '3', name: 'Gibson' },
];

const list = ['Body :', ' Erle', 'Neck: ', ' Ahorn'];

export function getProductInformation() {
  // TO DO REALLY CONNECT TO DATABASE

  return [
    {
      id: '1',
      brand_id: '1',
      model: ' Fender Stratocaster',
      description: 'Vintage  ',
      url: '/stratocaster.png',
      price: '1000€',
      list,
    },

    {
      id: '2',
      brand_id: '1',
      model: 'Fender Telecaster',
      description: 'Player series',
      url: '/telecaster.jpeg',
      price: '640€',
      list,
    },
    {
      id: '3',
      brand_id: '1',
      model: 'Fender Jazzmaster',
      description: 'Classic 50s',
      url: '/jazzmaster1.jpeg',
      price: '994€',
      list: {
        body: 'Erle',
        Neck: 'Ahorn',
        Electronic: 'passiv',
      },
    },

    {
      id: '4',
      brand_id: '2',
      model: 'Ibanez PIA3761',
      description: 'Envy Green',
      url: '/envygreen.jpg',
      price: '3.498€',
      list: {
        body: 'Erle',
        Neck: 'Ahorn',
        Electronic: 'passiv',
      },
    },
    {
      id: '5',
      brand_id: '2',
      model: 'Ibanez PGM333',
      description: '30th Anniversary',
      url: '/30thanny.jpg',
      price: '2499€',
      list: [
        {
          body: 'Erle',
          Neck: 'Ahorn',
          Electronic: 'passiv',
        },
      ],
    },
    {
      id: '6',
      brand_id: '2',
      model: 'Ibanez FR800',
      description: 'BKF Balck Flat',
      url: '/ibablack.jpg',
      price: '1190€',
    },
    {
      id: '6',
      brand_id: '3',
      model: 'Ibanez FR800',
      description: 'BKF Black Flat',
      url: '/ibablack.jpg',
      price: '1190€',
      list: {
        body: 'Erle',
        Neck: 'Ahorn',
        Electronic: 'passiv',
      },
    },
    {
      id: '6',
      brand_id: '3',
      model: 'Ibanez FR800',
      description: 'BKF Black Flat',
      url: '/ibablack.jpg',
      price: '1190€',
      list: {
        body: 'Erle',
        Neck: 'Ahorn',
        Electronic: 'passiv',
      },
    },
    {
      id: '6',
      brand_id: '3',
      model: 'Ibanez FR800',
      description: 'BKF BLACK FLAT',
      url: '/ibablack.jpg',
      price: '1190€',
      list: {
        body: 'Erle',
        Neck: 'Ahorn',
        Electronic: 'passiv',
      },
    },
    // { id: '6', brand_id: '2', model: '' },
    // { id: '7', brand_id: '3', model: '' },
  ];
}
