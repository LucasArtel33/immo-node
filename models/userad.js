'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAd.belongsTo(models.User);
      UserAd.belongsTo(models.Ad)
    }
  };
  UserAd.init({
  }, {
    sequelize,
    modelName: 'UserAd',
  });
  return UserAd;
};