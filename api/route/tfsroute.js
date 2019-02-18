'use strict';
module.exports = function(app) {
  var tfsItemController = require('../controller/tfsitemcontroller');
  var tfsUserController = require('../controller/tfsusercontroller');


  app.get('/', function (req, res) {
    // NEW CODE
    res.render('pages/login');
  })

  // todoList Routes
  app.route('/item')
  .get(tfsItemController.list_all_items)
  .post(tfsItemController.create_an_item);


  app.route('/item/:itemId')
  .get(tfsItemController.get_an_item)
  .put(tfsItemController.update_an_item)
  .delete(tfsItemController.delete_an_item);

  //Login
  app.route('/login')
  .post(tfsUserController.login);

  //User
  app.route('/user')
  .post(tfsUserController.create_an_user);

};