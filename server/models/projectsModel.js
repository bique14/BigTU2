const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
	campus_id: {
		type: String,
		trim: true,
		required: [true, 'campusid is required']
	},
	name_thai: {
		type: String,
		trim: true,
		required: [true, 'name_thai is required']
	},
	name_english: {
		type: String,
		trim: true,
		required: [true, 'name_english is required']
	},
	province: {
		type: String,
		trim: true,
		required: [true, 'province is required']
	},
	start_date: {
		type: Date,
		trim: true,
		required: [true, 'start_date is required']
	},
	due_date: {
		type: Date,
		trim: true,
		required: [true, 'due_date is required']
	},
	project_manager: {
		type: Object,
		trim: true,
		required: [true, 'project_manager is required']
	},
	supplier_contact: {
		type: Object,
		trim: true,
		required: [true, 'supplier_contact is required']
	}
});

const ProjectsModel = mongoose.model('Projects', ProjectsSchema, 'Projects');

exports.ProjectsModel = ProjectsModel;
exports.createProject = (body, cb) => {
	const params = { ...body };
	let project = new ProjectsModel({
    ...params
	});
	project.save((err, doc, row) => {
		cb(err, doc, row);
	})
}
