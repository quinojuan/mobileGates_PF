const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "ProductsColors",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
      },
      colorId:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
      }
      },
    {
      timestamps: false,
      freezeTableName: true, 
    }
  );
};