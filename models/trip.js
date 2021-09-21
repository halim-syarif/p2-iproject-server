'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Trip.hasOne(models.Mountain, {foreignKey: 'MountId'})
    }
  };
  Trip.init({
    MountId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    TrackId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    schedule: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    status: {
      type: DataTypes.BOOLEAN
    }
  }, {
    hooks: {
      beforeCreate: (trip) => {
        trip.status = true
      }
    },
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};