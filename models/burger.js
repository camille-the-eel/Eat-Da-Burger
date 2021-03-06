//Sequelize Table Model

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    devoured: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, 
  {
  freezeTableName: true
  });
  return Burger;
}