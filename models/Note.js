const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
var schema = new Schema({ 
 title: {type: String, required: true}, 
 description: {type: String, required: true}, 
}); 

const Note = mongoose.model('Note', schema);

module.exports = Note;