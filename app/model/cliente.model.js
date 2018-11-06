module.exports = (connection, Sequelize) => {
  const cliente = connection.define('cliente', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING(100)
    },
    telefone: {
      type: Sequelize.STRING(14)
    },
    email: {
      type: Sequelize.STRING(150)
    },
    situacao: {
      type: Sequelize.STRING(1)
    }
  })

  return cliente
}