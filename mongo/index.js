var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ABC');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  name : {type : String},
  phone_number : {type : String},
  profile_image : {type : String},
  school_name : {type : String},
  school_grade : {type : Number},
  school_class : {type : Number},
  school_number : {type : Number},
  student_number : {type : Number},
  email : {type : String},
  token : {type : String},
  isLogined : {type: Boolean, default: false}
});

Users = mongoose.model("users", UsersSchema);

var SchoolSchema = mongoose.Schema({
  name : {type : String},
  token : {type : String}
});

School = mongoose.model("school", SchoolSchema);

exports.School = School;
exports.Users = Users;
