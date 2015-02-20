'use strict';

var controller = require('./git_controllers.js')
  ;

module.exports = exports = function (router) {
  router.route('/clone').post(controller.cloneRepo);
  router.route('/files').get(controller.getFiles);
  router.route('/file/:filename*').get(controller.getFile);
}
