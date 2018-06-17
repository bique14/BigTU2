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

const CampusesModel = mongoose.model('Campuses', CampusesSchema, 'Campuses');

exports.CampusesModel = CampusesModel;
exports.createCampus = (body, cb) => {
  let campus = new CampusesModel();
  campus.address = body.address;
  campus.district = body.district;
  campus.province = body.province;
  campus.have_the_good_space = body.have_the_good_space;
  campus.save((err, doc, row) => {
    cb(err, doc, row);
  });
};

exports.getCampuses = () => {
	let campusProjection = {};
	return CampusesModel.find({}, campusProjection);
}