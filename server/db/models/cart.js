import mongoose from 'mongoose'

const Schema = mongoose.Schema
const Category = new Schema({
  city: {
    type: String
  },
  types: {
    type: Array,
    required: true
  },
  area: {
    type: Array,
    required: true
  }
})

export default mongoose.model('Category', Category)
