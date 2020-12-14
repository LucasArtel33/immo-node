'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advantage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advantage.belongsToMany(models.Ad, {through: models.AdvantageAd});
      Advantage.hasMany(models.AdvantageAd);
    }
  };
  Advantage.init({
    advantage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Advantage',
  });
  return Advantage;
};