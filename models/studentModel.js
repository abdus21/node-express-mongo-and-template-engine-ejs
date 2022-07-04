const mongoose = require('mongoose');

// student data schema
let studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Name is required"],
        trim : true
    },
    email : {
        type : String,
        required : [true,"Email is required"],
        unique : true,
        trim : true
    },
    cell : {
        type : String,
        unique : true,
        required :[true,"Cell is required"],
        trim : true
    },
    photo : {
        type : String,
        default : 'avatar.png'
    }
},{
    versionKey : false,
    timestamps : true
});



module.exports = mongoose.model('students',studentSchema)