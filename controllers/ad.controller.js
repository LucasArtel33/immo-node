const Ad = require('../models').Ad;
const Type = require('../models').Type;
const Keyword = require('../models').Keyword;
const Advantage = require('../models').Advantage;
const User = require('../models').User;

exports.ad_list = (req, res, next) => {
  Ad.findAll({
    attributes: ['id', 'title', 'price', 'location', 'room', 'desc', 'picture'],
    order: [
      ['title', 'ASC']
    ],
    include: [
      {
        model: Type,
        attributes: ['type'],
      },
      {
        model: Advantage,
        attributes: ['advantage']
      },
      {
        model: User,
        attributes: ['firstname']
      },
      {
        model: Keyword,
        attributes: ['keyword']
      }
    ]
   })
  .then( ads => res.status(200).json(ads))
  .catch(err => {console.log(err)})
}

exports.ad_add = (req, res, next) => {
  const ad = req.body;
  Ad.create(ad)
  .then(adCreated => {
    adCreated.setAdvantages(req.body.Advantage)
    adCreated.setKeywords(req.body.Keyword)
    adCreated.setUsers(req.body.User)
    adCreated.setType(req.body.Type)
    .then( data => res.status(201).json(data))
    .catch(err => console.log(err))
  })
}
  

exports.ad_detail = (req, res, next) =>{
  const id = req.params.id;
    Ad.findAll({
      attributes: ['id', 'title', 'price', 'location', 'room', 'desc', 'picture'],
      include: [
        {
          model: Type,
          attributes: ['type'],
        },
        {
          model: Advantage,
          attributes: ['advantage']
        },
        {
          model: User,
          attributes: ['firstname']
        },
        {
          model: Keyword,
          attributes: ['keyword']
        }
      ],
      where: {
        id: id
      }
    })
    .then(ad => res.status(200).json(ad))
    .catch(err => console.log(err))
}
exports.ad_edit = (req, res, next) =>{
  const id = req.params.id;
  const ad = req.body;
    Ad.update(ad, {
      where: {
        id: id
      }
    })
    .then(() => {
      res.status(200).json({message: 'Ad updated'})
    })
    .catch(err => console.log(err))
  }
  exports.ad_delete = (req, res, next) =>{
    const id = req.params.id;
      Ad.destroy({
        where: {
          id: id
        }
      })
      .then(ad => res.status(200).json({message: 'Ad deleted'}))
      .catch(err => console.log(err))
    }