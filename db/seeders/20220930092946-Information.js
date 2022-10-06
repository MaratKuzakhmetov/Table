module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Information', [
      {
        date: '2022-01-17T04:33:12.000Z',
        name: 'Berlin',
        number: 22,
        destination: 4500,
      },
      {
        date: '2021-09-21T10:33:12.000Z',
        name: 'Moscow',
        number: 1,
        destination: 1,
      },
      {
        date: '2020-10-02T05:33:12.000Z',
        name: 'Kazan',
        number: 17,
        destination: 700,
      },
      {
        date: '2021-02-24T05:33:12.000Z',
        name: 'Kiev',
        number: 333,
        destination: 1000,
      },
      {
        date: '2019-08-01T04:33:12.000Z',
        name: 'Tokio',
        number: 11,
        destination: 8000,
      },
      {
        date: '2022-02-24T04:33:12.000Z',
        name: 'Donetzk',
        number: 666,
        destination: 800,
      },
      {
        date: '2021-11-22T04:33:12.000Z',
        name: 'London',
        number: 13,
        destination: 1500,
      },
      {
        date: '2022-06-02T04:33:12.000Z',
        name: 'Pekin',
        number: 14,
        destination: 6000,
      },
      {
        date: '2022-03-15T04:33:12.000Z',
        name: 'Budapest',
        number: 20,
        destination: 900,
      },
      {
        date: '2021-12-22T04:33:12.000Z',
        name: 'New-York',
        number: 111,
        destination: 10000,
      },
      {
        date: '2016-09-03T04:33:12.000Z',
        name: 'Vladivostok',
        number: 7,
        destination: 5000,
      },
      {
        date: '2020-01-31T04:33:12.000Z',
        name: 'Novocheboksarsk',
        number: 21,
        destination: 650,
      },
      {
        date: '2020-04-13T04:33:12.000Z',
        name: 'Amsterdam',
        number: 12,
        destination: 5000,
      },
      {
        date: '2022-03-10T04:33:12.000Z',
        name: 'Astana',
        number: 5,
        destination: 3000,
      },
      {
        date: '2022-01-20T04:33:12.000Z',
        name: 'Paris',
        number: 14,
        destination: 1200,
      },
      {
        date: '2021-11-11T04:33:12.000Z',
        name: 'Toronto',
        number: 33,
        destination: 9000,
      },
      {
        date: '2020-11-02T04:33:12.000Z',
        name: 'Prague',
        number: 16,
        destination: 750,
      },
      {
        date: '2022-09-30T04:33:12.000Z',
        name: 'Potsdam',
        number: 18,
        destination: 2000,
      },
      {
        date: '2019-12-12T04:33:12.000Z',
        name: 'Oslo',
        number: 4,
        destination: 2300,
      },
      {
        date: '2021-09-10T04:33:12.000Z',
        name: 'La-Romana',
        number: 27,
        destination: 7500,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Information', null, {});
  },
};
