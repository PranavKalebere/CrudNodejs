const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userConstant = require('../constant/userConstant.json')

const userSchema = new Schema({
    UserId: {
        type: Number
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Address: {
        type: String
    }

}, { timestamps: true })

module.exports = new mongoose.model(userConstant.Collection, userSchema)