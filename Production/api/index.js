const express = require("express")
const path = require("path");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path: './.env'});

app.use(express.urlencoded())
const mongoose = require("mongoose");
const authRoute = require('./Routes/auth');
const userRoute = require('./Routes/users');
const postRoute = require('./Routes/posts')
const catRoute = require('./Routes/categories')
const multer = require("multer");
const { error } = require("console");

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.DATABASE , {

    useNewUrlParser : true,
    useUnifiedTopology : true,
    
}).then(console.log("DB connected"))
  .catch((err) => console.log(err));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage : storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try{
      return res.status(200).json("File has been uploaded");
    }
    catch(error){
      console.error(error);
    }
  });
  
  


app.use("/api/auth" , authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts" , postRoute);
app.use('/api/categories' , catRoute);


const PORT = process.env.PORT || 9002;


if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"));
}


  app.listen(PORT , () => {
    console.log("backend started")
})