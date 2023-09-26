const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Turn",
    {
      date: {
        type: DataTypes.DATE,
        allownull: true,
      },
      confirmation: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      realiced: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
    },
    {
      updatedAt: false,
    }
  );
};
