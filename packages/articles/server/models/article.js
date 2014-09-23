'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },

  potato: {
    type: Number,
    required: true,
    trim: true
  },

  eggplant: {
    type: Number,
    required: true,
    trim: true
  },

  total:{
    type: Number,
    required: true,
    trim: true

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

ArticleSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');


ArticleSchema.path('potato').validate(function(content) {
  return !!content;
}, 'Potato taco cannot be blank');


ArticleSchema.path('eggplant').validate(function(content) {
  return !!content;
}, 'Eggplant taco cannot be blank');

ArticleSchema.path('total').validate(function(content) {
  return !!content;
}, 'Total cannot be blank');
/**
 * Statics
 */
ArticleSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Article', ArticleSchema);
