const mongoose = require("mongoose");

const developerSchema = mongoose.Schema({
  id: { type: String, required: true },
  password:{type:String,required:true},
  name: { type: String, required: true },
  language: { type: String, required: true },
  technologies: [{ 
      techName: { type: String },
       techVersion: { type: String } 
      }],
});
const DeveloperModel = mongoose.model('developer',developerSchema);
module.exports= DeveloperModel;
