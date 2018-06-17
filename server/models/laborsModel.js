const mongoose = require('mongoose');

const LaborsSchema = new mongoose.Schema({
	campus_id: {
		type: String,
		trim: true,
		required: [true, 'camp_id is required']
	},
	firstname: {
		type: String,
		trim: true,
		required: [true, 'firstname is required']
	},
	lastname: {
		type: String,
		trim: true,
		required: [true, 'lastname is required']
	},
	telnum: {
		type: String,
		trim: true
	},
	id_number: {
		type: String,
		trim: true,
		required: [true, 'id_number is required']
	},
	nationality: {
		type: String,
		trim: true,
		required: [true, 'nationality is required']
	},
	followers: {
		type: Array,
		trim: true
	},
	occupation: {
		type: String,
		trim: true,
		required: [true, 'occupation is required']
	}
});

const LaborsModel = mongoose.model('Labors', LaborsSchema, 'Labors');

exports.LaborsModel = LaborsModel;
exports.createLabor = (body, cb) => {
	const params = { ...body };
	console.log(params);
	let labor = new LaborsModel({
		...params
	});
	labor.save((err, doc, row) => {
		cb(err, doc, row)
	});
}

exports.getLabors = (body) => {
	let laborProjection = {};
	return LaborsModel.find({}, laborProjection);
}