let express    = require("express"),
 app          = express(),
 mongoose     = require("mongoose"),
 bodyparser   = require( "body-parser" );

mongoose.connect("mongodb://localhost:/NDLEA")
app.use( bodyparser.urlencoded( { extended: true } ));
app.use( express.static("public"));
app.set("view engine", "ejs");

// SETUP SCHEMA
let culpritSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  sex: String,
  lga: String,
  phoneNumber: Number,
  occupation: String,
  nameOfDrug: String,
  drugPrice: Number,
  frequency: String,
  sellerName: String,
  sellerLocation: String,
  passport: String
})

let Culprit = mongoose.model("Culprit", culpritSchema );


// Culprit.create(
//   {
//     name: "Western camp", 
//     image: '/assets/mbuntu-2.jpg',
//     description: "This is a camp on the western side of Nigeria. It has a beautiful scene with lush vegetation."
//   },function(err,camp){
//     if(err){
//       console.log(`${err}, There was an error`)
//     } else {
//       console.log("NEWLY CREATED CAMPGRIUND")
//       console.log(camp)
//     }
//   })


app.get("/", ( req, res)=>{
  res.render( "landing" )
});

app.get("/register", ( req, res)=>{
  res.render( "register_culprit" )
});

app.get("/signin", ( req, res)=>{
  res.render( "signin" )
});


app.get("/signup", ( req, res)=>{
  res.render( "signup" )
});

// INDEX -- SHOW ALL CAMPGROUNDS
app.get( '/campgrounds', ( req, res )=> {
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log( err )
    } else {
      res.render( "index", { campgrounds: allCampgrounds })
    }
  })
});

//CREATE -- ADD NEW CAMPGROUND TO DB
app.post( '/campgrounds', ( req, res)=> {
  // get data from form and add to newCamp object
let name            = req.body.name,
   incomingImage    = req.body.image,
   image            = `/assets/${incomingImage}`,
   description      = req.body.description,
   newCamp          = { name, image, description };
  
  // create new camp ground and save to db
  Campground.create( newCamp, function( err, newlyCreated ){
    if(err){
      console.log(err)
    } else {
      // redirect back to campground page
      res.redirect("/campgrounds")
    }
  })
});

// NEW -- SHOW FORM TO CREATE NEW CAMPGROUND
app.get( "/campgrounds/new", ( req, res) => {
  res.render("new")
});

// SHOW A CAMPGROUND USING ITS ID
app.get("/campgrounds/:id", ( req, res) => {
  Campground.findById( req.params.id, (err, foundCampground) => {
    if(err){
      console.log( err)
    } else {
      res.render("show", {campground: foundCampground})
    }
  })
}); 

app.listen( 3000, ()=>{
  console.log( "The NDLEA server has started" )
})