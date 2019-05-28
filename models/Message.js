const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: mongoose.Schema.Types.ObjectId,
    sendTo: mongoose.Schema.Types.ObjectId,
    senderName: String,
    message: String,
    replies: []
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;