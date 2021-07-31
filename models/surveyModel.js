const mongoose = require('mongoose');
const RecipientSchema = require('./recipientModel');

const surveySchema = new mongoose.Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dateSent: Date,
  dateResponded: Date,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
