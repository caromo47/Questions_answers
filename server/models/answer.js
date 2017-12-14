let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnswerSchema = mongoose.Schema({
	answer: {type:String, required:true, minlength: 5},
	description: {type:String, maxlength: 200},
  likes: {type: Number, default: 0}
}, {timestamps:true});
mongoose.model('Answer', AnswerSchema);
