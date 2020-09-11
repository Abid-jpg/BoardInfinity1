const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const RecSchema = new Schema({
 taskname: {
  type: String,
  trim: true,
 },
 taskdescription: {
  type: String,
  trim: true,
 },
 creator: {
  type: String,
  trim: true,
 },
 duration: {
  type: Number,
  trim: true,
 },
 createdAt: {
  type: Date,
  trim: true,
 }
});
module.exports = mongoose.model('Record', RecSchema)
