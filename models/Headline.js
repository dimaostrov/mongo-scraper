import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({ 
 title: {type: String, required: true, unique: true}, 
 image: {type: String, required: true, unique: true},
 link: {type: String, required: true, unique: true},
 author: {type: String, required: true},
 saved: {type: Boolean, default: false} 
}); 

const Headline = mongoose.model('Headline', schema);

export default Headline;