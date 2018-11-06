const bd = require('../config/bd.config')
const Produto = bd.produto

exports.create = (req, res) => {
  Produto.create({
    nome: req.body.nome,
    valor: req.body.valor,
    situacao: req.body.situacao
  }).then((produto) => {
    res.send(produto)
  })
}

exports.findAll = (req, res) => {
  Produto.findAll().then((produtos) => {
    res.send(produtos)
  })
}

exports.findById = (req, res) => {
  Produto.findById(req.params.id).then((produto) => {
    res.send(produto)
  })
}

exports.update = (req, res) => {
  Produto.update({
    nome: req.body.nome,
    valor: req.body.valor,
    situacao: req.body.situacao
  },
  {
    where: {id: req.params.id}
  }).then(() => {
    res.status(200).send({
      mensagem: 'Registro alterado com sucesso!'
    })
  })
}

exports.delete = (req, res) => {
  Produto.destroy({
    where: {id: req.params.id}
  }).then(() => {
    res.status(200).send({
      mensagem: 'Registro deletado com sucesso!'
    })
  })
}