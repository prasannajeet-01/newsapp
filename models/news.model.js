const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '2880m' },
    }

});


const News = mongoose.model('News', newsSchema);

module.exports = News;