'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  job_title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  job_description: {
    type: String,
    default: '',
    trim: true
  },
  job_requirements: {
    type: String,
    default: '',
    trim: true
  },
  job_rate: {
    type: Number,
    default: '',
    trim: true
  },
  job_location: {
    type: String,
    default: ''
  },
  job_notes: {
    type: String,
    default: '',
    trim: true
  },
  job_link: {
    type: String,
    default: '',
    trim: true
  },
  company: {
    type: String,
    default: '',
    trim: true,
    required: 'Company cannot be blank'
  },
  company_notes: {
    type: String,
    default: '',
    trim: true
  },
  contact_name: {
    type: String,
    default: '',
    trim: true
  },
  contact_email: {
    type: String,
    default: '',
    trim: true
  },
  contact_phone: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Job', JobSchema);
