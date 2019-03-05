//Sequelize Table Model

module.exports = function (sequelize, DataType) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataType.STRING,
      allowNull: false
    }, 
    devoured: { 
      type: DataType.BOOLEAN,
    }
  }, 
  {
  freezeTableName: true
  });
  return Burger;
}