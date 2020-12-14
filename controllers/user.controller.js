const User = require('../models').User;
const Role = require('../models').Role;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.user_list = (req, res, next) => {
  User.findAll({
    attributes: ['id','firstname', 'lastname', 'age', 'mail','phone'],
    order: [
      ['roleId', 'ASC']
    ],
    include: [
      {
        model: Role,
        attributes: ['role'],
      }
    ]
   })
  .then( users => res.status(200).json(users))
  .catch(err => {console.log(err)})
}
exports.user_detail = (req, res, next) =>{
  const id = parseInt(req.params.id);
  User.findAll({
    attributes: ['id','firstname', 'lastname', 'age', 'mail','phone'],
    include: [
      {
        model: Role,
        attributes: ['role'],
      }
    ],
    where: {
      id: id
    }
   })
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
}
exports.user_add = (req, res, next) => {
  const user = req.body;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err){
      throw err;
    }
    user.password = hash;
    User.create(user)
    .then(createdUser => {
      createdUser.setRole(req.body.Role)
      .then( data => res.status(201).json(data))
      .catch(err => console.log(err))
    })
    }
  );  
}
exports.user_login = (req, res, next) => {
  User.findOne({
    where: {
      mail: req.body.mail
    }
  })
  .then(user => {
    if(user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(err) return res.status(500).json(err)
        else{
          if(result){
            console.log(result);
            const token = jwt.sign({ id: user.id, mail: user.mail, lastname: user.lastname, phone: user.phone, role: user.RoleId}, process.env.SECRET_PHRASE, {expiresIn: '24h'})
            res.status(200).json({ 
              token: token
            })
          }
          else return res.json({"message": "You fail"})
        }
      })
    } else {
      res.status(404).json({ message: 'Bad login / password'})
    }
  })
  .catch( err => {
    res.status(500).json({err: err, msg:"toto"})
  })
}

exports.user_delete = (req, res, next) => {
  const id = req.params.id
  User.destroy({
    where: {
      id: id
    }
  })
    .then(user => {
      if (user > 0) {
        res.status(201).json({ message: 'User deleted' })
      } else {
        res.status(404).json([])
      }
    })
}

exports.user_password = ( req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    req.body.password = hash
    const id = req.params.id
    User.update(req.body, {
      where: {
        id: id
      }
    })
      .then(user => {
        if (user > 0) {
          res.status(200).json({ message: `User ${id} is updated` })
        } else {
          res.status(404).json([])
        }
      })
      .catch(error => {
        if (error.name == 'SequelizeUniqueConstraintError') {
          res.status(403).json({ error: 'Duplicate entry. Impossible to add' })
        }
      })
  })


}
