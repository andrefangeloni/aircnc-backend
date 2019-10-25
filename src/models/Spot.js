const mongoose = require('mongoose');

const IP = '192.168.15.12';

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://${IP}:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
