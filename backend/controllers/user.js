const bcrypt = require('bcryptjs')
const User = require('../models/user')

exports.login = (req, res, next) => {
   const email = req.body.email
   const password = req.body.password

   User.findOne({ where: { email } })
   .then(user => {
      return bcrypt.compare(password, user.password)
   })
   .then(result => {
      if (result) {
         res.status(201).json({ message: 'User fetched succesfully!', userId: result.id })   
      }
      res.status(401).json({ message: 'Wrong credentials!' })
   })
   .catch(err => console.log(err))
}

exports.postCreateUser = (req, res, next) => {
   const name = req.body.name
   const email = req.body.email
   const password = req.body.password

   bcrypt.hash(password, 12)
      .then(hashedPassword => {
         return User.create({
            id: null,
            name,
            email,
            password: hashedPassword
         })
      })
      .then(result => {
         console.log('User created successfully.');
         res.status(201).json({ message: 'User created!', userId: result.id })
      })
      .catch(err => console.log(err))
};

