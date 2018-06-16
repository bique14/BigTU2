const mongoose = require('mongoose');

const FollowersSchema = new mongoose.Schema({
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
    id_number: {
        type: String,
        trim: true,
        required: [true, 'id_number is required']
    },
    birthdate: {
        type: Date,
        trim: true,
        required: [true, 'birthdate is required']
    },
    nationality: {
        type: String,
        trim: true,
        required: [true, 'nationality is required']
    },
    gender: {
        type: String,
        trim: true,
        required: [true, 'gender is required']
    },
    have_injected_vaccine: {
        type: Boolean,
        trim: true
    },
    medical_history: {
        type: Array,
        trim: true
    },
    education_history: {
        type: Object,
        trim: true
    }
});

const Followers = (module.exports = mongoose.model('Followers', FollowersSchema, 'Followers'));