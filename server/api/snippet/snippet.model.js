'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SnippetSchema = new Schema({
  _id: String,
  title: String,
  desc: String,
  isActive: Boolean,
  code: Object,
  tags: Array,
  created: String
});

module.exports = mongoose.model('Snippet', SnippetSchema);