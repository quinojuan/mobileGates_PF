const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
        validate:{
            isEmail:{
                params: true,
                message: "require a validate email"
            }
        }
      },
      username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      admin:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
      }, 
      superadmin:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      active:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
      }
      },
    {
      freezeTableName: true, 
    }
  );
};