const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({ 
 title: {type: String, required: true, unique: true}, 
 image: {type: String, required: true, unique: true},
 link: {type: String, required: true, unique: true},
 author: {type: String, required: true},
 notes: [{
   type: Schema.Types.ObjectId,
   ref: "Note"
 }],
 saved: {type: Boolean, default: false} 
}); 

const Headline = mongoose.model('Headline', schema);

module.exports = Headline;