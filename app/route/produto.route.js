module.exports = (server) => {
  const produtoController = require('../controller/produto.controller')

  server.post('/api/produtos', produtoController.create)
  server.get('/api/produtos', produtoController.findAll)
  server.get('/api/produtos/:id', produtoController.findById)
  server.put('/api/produtos/:id', produtoController.update)
  server.delete('/api/produtos/:id', produtoController.delete)
}