var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link.js')

//hashing of passwords adn comparing of pw with hash values
//metnod for intiializing user as well
var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  // defaults: {
  //   // visits: 0
  // },
  // clicks: function() {
  //   return this.hasMany(Click);
  // },
  // initialize: function(){
  //   this.on('creating', function(model, attrs, options){
  //     var shasum = crypto.createHash('sha1');
  //     shasum.update(model.get('url'));
  //     model.set('code', shasum.digest('hex').slice(0, 5));
  //   });
  // },
  links: function() {
    return this.hasMany(Link);
  }
});

module.exports = User;