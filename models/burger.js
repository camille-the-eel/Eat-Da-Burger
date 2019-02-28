module.exports = function (sequelize, DataType) {
  var Burger = sequelize.define("Burger", {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
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