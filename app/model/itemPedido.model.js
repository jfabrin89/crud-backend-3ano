module.exports = (connection, Sequelize) => {
  const ItemPedido = connection.define('itemPedido', {
    valoritem: {
      type: Sequelize.DECIMAL(10,2)
    },
    quantidade: {
      type: Sequelize.INTEGER,
    },
    valortotal: {
      type: Sequelize.DECIMAL(10,2)
    }
  }, {underscored: true})

  return ItemPedido
}