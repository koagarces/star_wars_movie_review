const { Schema } = require('mongoose')

const Review = new Schema(
    {
        rating: { type: Number },
        user: { type: String, },
        comment: { type: String, },
    },
    { timestamps: true })




module.exports = Review