const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Tablets', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand:{
      type: DataTypes.STRING,
      allowNull: false
    },
    operative_system:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    size:{
      type: DataTypes.STRING,
      allowNull: false
    },
    inches:{
      type: DataTypes.STRING,
      allowNull: false
    },
    main_camera:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    ram:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    capacity:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    frontal_camera:{
      type: DataTypes.STRING,
      allowNull: false
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    battery:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    cpu:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }, 
    description:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    timestamps: false,
    freezeTableName: true,
  });
};
