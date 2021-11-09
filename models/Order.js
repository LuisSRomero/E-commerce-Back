module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      statusOrder: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};