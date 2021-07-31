const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  email: String,
  responded: {
    type: Boolean,
    default: false,
  },
});

// const Recipient = mongoose.model('Recipient', recipientSchema);

// module.export = Recipient;

module.exports = recipientSchema;
