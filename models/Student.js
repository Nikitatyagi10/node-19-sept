const mongoose =require ('mongoose');
const Schema = mongoose.Schema;
const studentSchema= new Schema ({
    rollNo:{type: String,required:true},
    firstname:{type: String},
    lastname:{type: String},
    fathername:{type: String},
    adharNO:{type: String},
    mobileNO:{type: String},
})
module.exports = mongoose.model('student', studentSchema)