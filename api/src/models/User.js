const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      userName: {
        type: DataTypes.STRING(25),
      },
      firstName: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      address: {
        type: DataTypes.STRING(100),
        defaultValue: null,
      },
      role: {
        // null: basic user ; false: admin user ; true: super admin user
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      state: {
        // false: banned/disabled ; true: active
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      banned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );
};
