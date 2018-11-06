module.exports = (server) => {
  const itemPedidoController = require('../controller/itemPedido.controller')

  server.post('/api/items', itemPedidoController.create)
  server.get('/api/items/:pedido_id', itemPedidoController.findById)
  server.put('/api/items/:pedido_id/:produto_id', itemPedidoController.update)
  server.delete('/api/items/:pedido_id/:produto_id', itemPedidoController.delete)
}