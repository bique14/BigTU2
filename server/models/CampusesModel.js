const mongoose = require('mongoose');

const CampusesSchema = new mongoose.Schema({
  address: {
    type: String,
    trim: true,
    required: [true, 'Address is required']
  },
  district: {
    type: String,
    trim: true,
    required: [true, 'District is required']
  },
  province: {
    type: String,
    trim: true,
    required: [true, 'Province is required']
  },
  have_the_good_space: {
    type: Boolean,
    default: false
  }
});

const CampusesModel = (module.exports = mongoose.model('Campuses', CampusesSchema, 'Campuses'));