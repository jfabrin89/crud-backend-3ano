module.exports = (connection, Sequelize) => {
  const Pedido = connection.define('pedido', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    valortotal: {
      type: Sequelize.DECIMAL(10,2)
    },
    data: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    situacao: {
      type:Sequelize.STRING(1)
    }
  }, {underscored: true})

  return Pedido
}