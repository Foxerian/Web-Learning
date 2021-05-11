var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    //below username and password will be added by passport moongose automatically
    /*username: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },*/
    firstname: {
        type: String,
          default: ''
      },
    lastname: {
        type: String,
          default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    }
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);