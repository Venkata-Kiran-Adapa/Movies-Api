const { moviedb }=require("../models/movies");

async function getmovie(){
    return await moviedb.find().limit(20);
}

async function createMovie(req){
    const newMovie=new moviedb({
        title: req.body.title,
        directors: req.body.directors ,
        runtime: req.body.runtime,
        year: req.body.year,
        genres:req.body.genres
    })
    return await newMovie.save();
}

async function handleGetAllMovies(req,res){
    res.send(await getmovie());
}

async function handlePostNewMovie(req,res){
    if(Object.keys(req.body).length !== 0)  res.send(await createMovie(req));
    else res.send("Enter Movie details...!")
}

async function handleGetMoviesByTitle(req,res){
    const result =await moviedb.find({   title: new RegExp(req.params.title, 'i')});
    if(result.length==0)  return res.status(404).send('Movie not found');
    res.send(result);
}

async function handleGetMoviesByDirectors(req,res){
    const result =await moviedb.find({ directors: new RegExp(req.params.directors, 'i')});
    if(result.length==0)  return res.status(404).send('Movie not found');
    res.send(result);
}

async function handleGetMoviesByYear(req,res){
    const result =await moviedb.find({ year : new RegExp(req.params.year, 'i')});
    if(result.length==0)  return res.status(404).send('Movie not found');
    res.send(result);
}

async function handleGetMoviesByGenre(req,res){
    const result =await moviedb.find({ genres : new RegExp(req.params.genres, 'i')});
    if(result.length==0)  return res.status(404).send('Movie not found');
    res.send(result);
}

async function handleUpdateMoviesByTitle(req,res){
    let result =await moviedb.find({ title: new RegExp(req.params.title,'i') });
    if(result.length==0 || Object.keys(req.body).length === 0 ) return res.status(404).send('Movie not found');
    result =await moviedb.findByIdAndUpdate(result[0].id,{
      $set:{
            title : (req.body.title) ? req.body.title : result.title ,
            directors: (req.body.directors) ? req.body.directors : result.directors,
            runtime: (req.body.runtime) ? req.body.runtime : result.runtime ,
            year:(req.body.year) ? req.body.year : result.year ,
            genres:(req.body.genres) ? req.body.genres : result.genres 
      }
    });
      res.status(200).send("Value Updated");
}

async function handleDeleteMoviesByTitle(req,res){
    let result =await moviedb.find({ title: new RegExp(req.params.title,'i') });
    if(result.length==0)  return res.status(404).send('Movie not found');
    result =await moviedb.findByIdAndDelete(result[0].id);
    res.send(result);
}


module.exports={
    handleGetAllMovies,
    handlePostNewMovie,
    handleGetMoviesByDirectors,
    handleGetMoviesByYear,
    handleGetMoviesByGenre,
    handlePostNewMovie,
    handleUpdateMoviesByTitle,
    handleDeleteMoviesByTitle,
    handleGetMoviesByTitle
};