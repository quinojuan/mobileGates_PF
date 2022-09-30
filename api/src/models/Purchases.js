const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Purchases',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			
			dni: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			adress: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			birthday: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			amount:{
				type: DataTypes.INTEGER,
			     allowNull: false
			},
		 	 id_transaction:{
				type: DataTypes.TEXT,
				unique: true,
			  }, 

		},
		{
			freezeTableName: true,
		}
	);
};
