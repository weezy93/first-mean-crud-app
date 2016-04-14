var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema ({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean,  required: true, default: false,}
});

// has the password before saving to dropDatabase
UserSchema.pre('save', function (next) {
  var user = this; // OOP
  
  // only hash if password is new or being modified

  // generate salt

    // hash password

    // override the plain-text password with new hashed/salted password

})

// compare password to verify plain text vs. hashed password

var User = mongoose.model('users', UserSchema);

module.exports = User;
