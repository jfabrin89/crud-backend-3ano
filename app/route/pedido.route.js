module.exports = (server) => {
  const pedidoController = require('../controller/pedido.controller')

  server.post('/api/pedidos', pedidoController.create)
  server.get('/api/pedidos', pedidoController.findAll)
  server.get('/api/pedidos/:id', pedidoController.findById)
  server.put('/api/pedidos/:id', pedidoController.update)
  server.delete('/api/pedidos/:id', pedidoController.delete)
}