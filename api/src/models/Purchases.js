const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Purchases",
    {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: true
      },
      dni:{
        type: DataTypes.STRING,
        allowNull: false
      },
      adress:{
        type: DataTypes.STRING,
        allowNull: false
      },
      birthday:{
        type: DataTypes.STRING,
        allowNull: false
      },
      // creditCard:{
      //   type: DataTypes.STRING(10),
      //   allowNull: false
      // },
      id_transaction:{
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
      },
      quantity:{
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
      },
    {
      freezeTableName: true, 
    }
  );
};