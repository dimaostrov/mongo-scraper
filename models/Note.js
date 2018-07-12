const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
var schema = new Schema({ 
 body: {type: String, required: true}, 
 headline: {type: Schema.Types.ObjectId, ref: 'Headline'}, 
}); 

const Note = mongoose.model('Note', schema);

module.exports = Note;