const brand = [
  { id: '1', name: 'Fender' },
  { id: '2', name: 'Yamaha' },
  { id: '3', name: 'Gibson' },
];

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
    },
    {
      id: '2',
      brand_id: '1',
      model: 'Fender Telecaster',
      description: 'Player series',
      url: '/telecaster.jpeg',
      price: '640€',
    },
    {
      id: '3',
      brand_id: '1',
      model: 'Fender Jazzmaster',
      description: 'Classic 50s',
      url: '/jazzmaster1.jpeg',
      price: '994€',
    },

    {
      id: '4',
      brand_id: '2',
      model: 'IBANEZ PIA3761',
      description: 'ENVY GREEN',
      url: '/envygreen.jpg',
      price: '3.498€',
    },
    {
      id: '5',
      brand_id: '2',
      model: 'IBANEZ PGM333',
      description: '30TH ANNIVERSARY',
      url: '/30thanny.jpg',
      price: '2499€',
    },
    {
      id: '6',
      brand_id: '2',
      model: 'IBANEZ FR800',
      description: 'BKF BLACK FLAT',
      url: '/ibablack.jpg',
      price: '1190€',
    },

    // { id: '6', brand_id: '2', model: '' },
    // { id: '7', brand_id: '3', model: '' },
  ];
}
