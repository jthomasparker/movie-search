const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titleSchema = new Schema({})

const Title = mongoose.model('Title', titleSchema, "Titles");

module.exports = Title;