const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Service",
    {
      title: {
        type: DataTypes.STRING(30),
        allownull: true,
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      price: {
        type: DataTypes.FLOAT,
        allownull: true,
      },
      duration: {
        type: DataTypes.FLOAT,
        defaultValue: null,
      },
    },
    {
      updatedAt: false,
    }
  );
};
