const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Practice')
  .then(()=> console.log("Database connected....!"))
  .catch(err=> console.error("could not connect....!"));

const movieschema=new mongoose.Schema({
    "title":{
        type: String,
        required:true
    }, 
    "directors": {
        type:  [ String ],
        required:true
    },
    "runtime": String,
    "year":{
        type: String,
        required:true
    },
    "genres": [ String ]
})

const moviedb=mongoose.model('movies',movieschema);

module.exports={
    moviedb
};