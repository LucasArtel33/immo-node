const Type = require('../models').Type;
exports.type_list = (req, res, next) => {
  Type.findAll({
    order: [
      ['type', 'ASC']
    ]
   })
  .then( types => res.status(200).json(types))
  .catch(err => {console.log(err)})
}
exports.type_add = (req, res, next) => {
  const type = req.body;
  Type.create(type)
  .then( data => res.status(201).json(data))
  .catch(err => {
    if(err.name == "SequelizeUniqueConstraintError"){
      res.status(403).json({'error': `Duplicate entry. Impossible to add`});
    } else{
      res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
    }
  })
}
exports.type_detail = (req, res, next) =>{
  const id = req.params.id;
    // Type.findOne({
    //   where: {
    //     id: id
    //   }
    // })
    Type.findByPk(id)
    .then(type => res.status(200).json(type))
    .catch(err => console.log(err))
  }
exports.type_edit = (req, res, next) =>{
  const id = req.params.id;
  const type = req.body;
    Type.update(type, {
      where: {
        id: id
      }
    })
    .then(() => {
      res.status(200).json({message: 'Type updated'})
    })
    .catch(err => console.log(err))
  }
  exports.type_delete = (req, res, next) =>{
    const id = req.params.id;
      Type.destroy({
        where: {
          id: id
        }
      })
      .then(type => res.status(200).json({message: 'Type deleted'}))
      .catch(err => console.log(err))
    }