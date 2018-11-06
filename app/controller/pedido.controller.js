const bd = require('../config/bd.config')
const Pedido = bd.pedido

exports.create = (req, res) => {
  Pedido.create({
    cliente_id: req.body.cliente_id,
    valortotal: req.body.valortotal,
    situacao: req.body.situacao
  }).then((pedido) => {
    res.send(pedido)
  })
}

exports.findAll = (req, res) => {
  Pedido.findAll().then((pedidos) => {
    res.send(pedidos)
  })
}

exports.findById = (req, res) => {
  Pedido.findById(req.params.id).then((pedido) => {
    res.send(pedido)
  })
}

exports.update = (req, res) => {
  Pedido.update({
    cliente_id: req.body.cliente_id,
    valortotal: req.body.valortotal,
    situacao: req.body.situacao
  },
  {
    where: {id: req.params.id}
  }).then(() => {
    res.status(200).send({
      mensagem: `Pedido ${req.params.id} alterado com sucesso!`
    })
  })
}

exports.delete = (req, res) => {
  Pedido.destroy({
    where: {id: req.params.id}
  }).then(() => {
    req.status(200).send(`Pedido ${req.params.id} deletado com sucesso!`)
  })
}