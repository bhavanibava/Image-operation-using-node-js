var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageUpload = new Schema({
    imageData : {
        type : Buffer,
        index : true
    },
    content:{
        type : String
    },
    createdDate:{
        type: Date,
        default : Date.now
    }
});
module.exports = mongoose.model('ImageUpload',ImageUpload);