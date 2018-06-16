const mongoose = require('mongoose');

const LaborsSchema = new mongoose.Schema({


    camp_id: {
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
    follower_id: {
        type: Array,
        trim: true
    },
    occupation: {
        type: String,
        trim: true,
        required: [true, 'occupation is required']
    }



});

const Labors = (module.exports = mongoose.model('Labors', LaborsSchema, 'Labors'));