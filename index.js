const express = require("express");
const {urlMongoConnection} = require("./connect.js");
const URL = require("./models/url.js");
const path = require('path');
const bodyParser = require('body-parser');
const { url } = require("inspector");
const app = express();
const cookieParser = require('cookie-parser')
const {restrictToLoggedInUserOnly} = require("./middleware/auth.js");
const PORT = 9000;

//ROUTES
const {UrlRoute} = require("./routes/url")
//const staticRoute = require("./routes/staticRouter.js");
const { StaticRoute } = require("./routes/staticRouter.js");
const { userRoute } = require("./routes/user.js");

urlMongoConnection("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("MongoDB connected"));

//Server side rendering
app.get("/test",StaticRoute);

app.set("view engine","ejs")
app.set('views',path.join(__dirname, 'views'));
/////////////////////////////////////////////////
app.use(express.json());
app.use(cookieParser());
app.use(restrictToLoggedInUserOnly);
app.use(express.urlencoded({extended:true}));
/////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',StaticRoute);
app.use('/user',userRoute);

app.use("/url", UrlRoute); //Inline Middleware(will only work when in between function's conditions satisfy)
app.get("/url/:shortId",UrlRoute);
app.get("/url/analytics",UrlRoute);
app.listen(PORT,()=>console.log("Server Connected at : ",PORT));



//http://localhost:9000/
