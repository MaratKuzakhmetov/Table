const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    static associate(models) {
    }
  }
  Information.init({
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Information',
  });
  return Information;
};
