const mongoose = reuquire('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {},
  authors: {},
  description: {},
  date: {},
  image: {},
  link: {}
});
 


export default books;