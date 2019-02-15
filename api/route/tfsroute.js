'use strict';
module.exports = function(app) {
  var youngDepthController = require('../controller/tfscontroller');

  // todoList Routes
  app.route('/item')
  .get(youngDepthController.list_all_items)
  .post(youngDepthController.create_an_item);


  app.route('/item/:itemId')
  .get(youngDepthController.get_an_item)
  .put(youngDepthController.update_an_item)
  .delete(youngDepthController.delete_an_item);
};