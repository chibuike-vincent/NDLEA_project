let express    = require("express"),
 app          = express(),
 mongoose     = require("mongoose"),
 bodyparser   = require( "body-parser" );

mongoose.connect("mongodb://localhost:27017/NDLEA", { useNewUrlParser: true })
.then(()=> {
  console.log("Database connected");
})
.catch((err) =>{
  console.log("An error occurred"+ err)
})
app.use( bodyparser.urlencoded( { extended: true } ));
app.use( express.static("public"));
app.set("view engine", "ejs");7

// SETUP SCHEMA
let culpritSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  sex: String,
  lga: String,
  state: String,
  phoneNumber: Number,
  occupation: String,
  nameOfDrug: String,
  drugPrice: Number,
  frequency: String,
  sellerName: String,
  sellerLocation: String,
  passport: String,
  description: String,
  date: {type: Date, default: Date.now }
})

let Culprit = mongoose.model("Culprit", culpritSchema );

// INDEX ROUTE
app.get("/", ( req, res)=>{
  res.render( "landing" )
});


// SIGNIN ROUTE
app.get("/signin", ( req, res)=>{
  res.render( "signin" )
});


// SIGNUP ROUTE
app.get("/signup", ( req, res)=>{
  res.render( "signup" )
});

// INDEX -- SHOW ALL CULPRITS
app.get( '/culprits', ( req, res )=> {
  Culprit.find({}, function(err, allCulprits){
    if(err){
      console.log( err )
    } else {
      res.render( "index", { allCulprits })
    }
  }).sort({'date': -1})
});

//CREATE -- ADD NEW CULPRIT TO DB
app.post( '/culprits', ( req, res)=> {
  // create new culprit and save to db
  Culprit.create( req.body.culprit, function( err, newCulprit ){
    if(err){
      console.log(err)
    } else {
      // redirect back to culprits page
      res.redirect("/culprits")
    }
  })
});

// NEW -- SHOW FORM TO CREATE NEW CULPRIT
app.get("/register", ( req, res)=>{
  res.render( "register_culprit" )
});

// SHOW A CULPRIT USING ITS ID
app.get("/culprits/:id", ( req, res) => {
  Culprit.findById( req.params.id, (err, foundCulprit) => {
    if(err){
      console.log( err)
    } else {
      res.render("show", { foundCulprit})
    }
  })
}); 

app.listen( 3000, ()=>{
  console.log( "The NDLEA server has started" )
})