const Advantage = require('../models').Advantage;
exports.advantage_list = (req, res, next) => {
  Advantage.findAll({
    order: [
      ['advantage', 'ASC']
    ]
   })
  .then( advantages => res.status(200).json(advantages))
  .catch(err => {console.log(err)})
}
exports.advantage_add = (req, res, next) => {
  const advantage = req.body;
  Advantage.create(advantage)
  .then( data => res.status(201).json(data))
  .catch(err => {
    if(err.name == "SequelizeUniqueConstraintError"){
      res.status(403).json({'error': `Duplicate entry. Impossible to add`});
    } else{
      res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
    }
  })
}
exports.advantage_detail = (req, res, next) =>{
  const id = req.params.id;
    Advantage.findByPk(id)
    .then(advantage => res.status(200).json(advantage))
    .catch(err => console.log(err))
  }
exports.advantage_edit = (req, res, next) =>{
  const id = req.params.id;
  const advantage = req.body;
    Advantage.update(advantage, {
      where: {
        id: id
      }
    })
    .then(() => {
      res.status(200).json({message: 'Advantage updated'})
    })
    .catch(err => console.log(err))
  }
  exports.advantage_delete = (req, res, next) =>{
    const id = req.params.id;
      Advantage.destroy({
        where: {
          id: id
        }
      })
      .then(advantage => res.status(200).json({message: 'Advantage deleted'}))
      .catch(err => console.log(err))
    }