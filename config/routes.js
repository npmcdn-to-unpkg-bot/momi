/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // },
  '/admin':'adminController.serveApp',
  'GET /': 'FrontController.home',


 

  
  'GET /tag/searchAutocomplete/:searchText':'tagController.searchAutocomplete',
  'GET /category/searchAutocomplete/:searchText':'categoryController.searchAutocomplete',
  'POST /article/:id/documents':'articleController.uploadDocument',
  'POST /article/:id/images':'articleController.uploadImage',
  'POST /category/:id/images':'categoryController.uploadImage',
  'GET /image/:size/:name':'ImageController.serveImage',
  'POST /image/resize':'ImageController.resizeImage',
  'POST /image/resizeprofile':'ImageController.resizeImageProfile',
  'get /article/search/:sort/:slug':'articleController.search',
  'get /article/:sort/:limit/:page':'articleController.fetch',
  'get /articleActif/:sort/:limit/:page':'articleController.fetchActive',
  'get /article/:id':'articleController.fetchOne',

  //USER
  // 'POST /user':'UserController.create',
  'GET /user/verifyUniqueEmail/:email':'UserController.verifyUniqueEmail',
  'POST /user/firstConnexion':'UserController.firstConnexion',
  'POST /auth/login':'UserController.login',
  'POST /user/:id/images':'userController.uploadImage',
  'get /user/search/:sort/:slug':'userController.search',
  'GET /user/searchAutocomplete/:searchText':'userController.searchAutocomplete',
  'POST /saveDash':'userController.saveDash',
  'GET /restoreDash':'userController.restoreDash',
  
  // LOGIN

  'get /toto' :'testController.toto',


  // 'POST /article/:id/tags/:pk':'ArticleController.addTag',
  // 'POST /article/:id/tags':'ArticleController.addTag',
  // 'DELETE /article/:id/tags/:pk':'ArticleController.removeTag',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


  //FRONT


  // 'GET /grimpes': 'frontController.portfolio',
  // 'GET /avendre': 'frontController.avendre',
  // 'GET /projet/:id/*':'frontController.projet',
  // 'GET /blog': 'frontController.blog',
  // 'GET /blog/:page': 'frontController.blog',
  // 'GET /blog/category/:thiscat': 'frontController.category',
  // 'GET /blog/category/:thiscat/:page': 'frontController.category',
  // 'GET /blog/article/:id/*':'frontController.article',
  'GET /contact':'frontController.contact',
  'GET /presta':'frontController.presta',
  
  // 'POST /contactEmail':'frontController.contactEmail',
  // 'POST /project/:itemid/addComment':'frontController.addCommentProj',
  // 'POST /project/addReponse/:itemid/:projid':'frontController.addReponseProj',  
  // 'POST /article/:itemid/addComment':'frontController.addCommentArticle',
  // 'POST /article/addReponse/:itemid/:projid':'frontController.addReponseArticle',

  // 'get /createNotif':'NotificationController.createNotif',
  // 'get /createComment':'NotificationController.createComment',

  // 'GET /file/image/:size/:name':'ImageController.serveImage',
  // 'GET /file/document/:name':'DocumentController.serveDocument',
  // 'GET /test':'FrontController.test',

};
