var mongoose = required('mongoose');

//Define the collection schema
var teamSchema = mongoose.schema({
    name:{
        type:string,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    shortName:{
        type:string,
        required:false
    }
})

//Export the teams module
var teams = module.exports = mongoose.model('teams', teamSchema);