'use strict';
const {
  Model, DatabaseError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ad.belongsTo(models.Type);
      Ad.belongsToMany(models.User, {through: models.UserAd});
      Ad.hasMany(models.UserAd);
      Ad.belongsToMany(models.Keyword, {through: models.KeywordAd});
      Ad.hasMany(models.KeywordAd);
      Ad.belongsToMany(models.Advantage, {through: models.AdvantageAd});
      Ad.hasMany(models.AdvantageAd);
    }
  };
  Ad.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    room: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ad',
  });
  return Ad;
};