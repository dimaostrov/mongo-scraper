import mongoose from 'mongoose';
const Schema = mongoose.Schema;
 
var schema = new Schema({ 
 title: {type: String, required: true}, 
 description: {type: String, required: true}, 
}); 

const Note = mongoose.model('Note', schema);

export default Note;