module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Information', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
        isNull: false,
      },
      name: {
        type: Sequelize.STRING,
        isNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        isNull: false,
      },
      destination: {
        type: Sequelize.INTEGER,
        isNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Information');
  },
};
