module.exports = (connection, Sequelize) => {
  const produto = connection.define('produto', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING(100)
    },
    valor: {
      type: Sequelize.DECIMAL(10,2)
    },
    situacao: {
      type: Sequelize.STRING(1)
    }
  })

  return produto
}