'use strict';

// import crypto from 'crypto';
mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';

const JobSchema = Schema({
    entitled: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    company: String,
    job_location: {
        country: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        }
    },
    created_at: {
        type: Date,
        select: true,
        default: Date.now()
    },
    start_date: { /* Date specifique à laquelle la prestation ou job devra débuter */
        type: Date,
        select: true,
        default: Date.now()
    },
    end_date: {
        type: Date,
        select: true,
        default: new Date(+new Date() + 31*24*60*60*1000)
    },
    offered_salary: Number,
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job', JobSchema);