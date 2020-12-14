const Keyword = require('../models').Keyword;
exports.keyword_list = (req, res, next) => {
  Keyword.findAll({
    order: [
      ['keyword', 'ASC']
    ]
   })
  .then( keywords => res.status(200).json(keywords))
  .catch(err => {console.log(err)})
}
exports.keyword_add = (req, res, next) => {
  const keyword = req.body;
  Keyword.create(keyword)
  .then( data => res.status(201).json(data))
  .catch(err => {
    if(err.name == "SequelizeUniqueConstraintError"){
      res.status(403).json({'error': `Duplicate entry. Impossible to add`});
    } else{
      res.status(400).json({'error': `Can't add, bad fields. Check the documentation`});
    }
  })
}
exports.keyword_detail = (req, res, next) =>{
  const id = req.params.id;
    // Keyword.findOne({
    //   where: {
    //     id: id
    //   }
    // })
    Keyword.findByPk(id)
    .then(keyword => res.status(200).json(keyword))
    .catch(err => console.log(err))
  }
exports.keyword_edit = (req, res, next) =>{
  const id = req.params.id;
  const keyword = req.body;
    Keyword.update(keyword, {
      where: {
        id: id
      }
    })
    .then(() => {
      res.status(200).json({message: 'Keyword updated'})
    })
    .catch(err => console.log(err))
  }
  exports.keyword_delete = (req, res, next) =>{
    const id = req.params.id;
      Keyword.destroy({
        where: {
          id: id
        }
      })
      .then(keyword => res.status(200).json({message: 'Keyword deleted'}))
      .catch(err => console.log(err))
    }