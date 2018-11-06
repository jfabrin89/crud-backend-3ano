const bd = require('../config/bd.config')
const ItemPedido = bd.itemPedido

exports.create = (req, res) => {
  ItemPedido.create({
    pedido_id: req.body.cliente_id,
    produto_id: req.body.produto_id,
    valoritem: req.body.valoritem,
    quantidade: req.body.quantidade,
    valortotal: req.body.valortotal
  }).then((itempedido) => {
    res.send(itempedido)
  })
}

exports.findById = (req, res) => {
  ItemPedido.findById(req.params.pedido_id).then((itemspedido) => {
    res.send(itemspedido)
  })
}

exports.update = (req, res) => {
  ItemPedido.update({
    pedido_id: req.body.pedido_id,
    produto_id: req.body.produto_id,
    valoritem: req.body.valoritem,
    quantidade: req.body.quantidade,
    valortotal: req.body.valortotal
  },
  {
    where: {pedido_id: req.params.pedido_id, produto_id: req.params.produto_id}
  }).then(() => {
    res.status(200).send({
      mensagem: `Produto ${req.params.produto_id}, Pedido ${req.params.pedido_id} alterado com sucesso!`
    })
  })
}

exports.delete = (req, res) => {
  ItemPedido.destroy({
    where: {pedido_id: req.params.pedido_id, produto_id: req.params.produto_id}
  }).then(() => {
    req.status(200).send({
      mensagem: `Produto ${req.params.produto_id}, Pedido ${req.params.pedido_id} deletado com sucesso!`
    })
  })
}