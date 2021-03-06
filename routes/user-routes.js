const userRouter = require('express').Router();

const authHelpers = require('../utils/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});
userRouter.post('/', usersController.create);
userRouter.get('/', authHelpers.loginRequired, usersController.index);

userRouter.delete(
  '/:id([0-9]+)',
  (req, res, next) => {
    req.logOut();
    next();
  },
  usersController.delete
);

module.exports = userRouter;
