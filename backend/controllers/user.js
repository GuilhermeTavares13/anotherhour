const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.postLogin = async (req, res, next) => {

   const email = req.body.email;
   const password = req.body.password;

   User.findOne({ where: { email } })
      .then(user => {
         if (!user) {
            res.status(401).json({ message: 'Wrong credentials!', token: null });
            return;
         }
         return bcrypt.compare(password, user.password)
            .then(result => {
               if (result) {
                  console.log(user.id);
                  const token = jwt.sign(
                     {
                        email: user.email,
                        sub: user.id,
                        name: user.name
                     },
                     process.env.SECRETKEYJWT,
                     {expiresIn: '24h'}
                  );
                  res.status(201).json({ message: 'User logged succesfully!', token: token });
                  return;
               }
               res.status(401).json({ message: 'Wrong credentials!', token: null });
               return;
            })
      })
      .catch(err => {
         res.status(500).json({ message: 'Unexpected error!', token: null })
      });
}

exports.postCreateUser = (req, res, next) => {
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;

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
      .catch(err => console.log(err));
};

