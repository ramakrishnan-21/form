var express = require("express"),
User = require("./model/user"),
bodyParser = require("body-parser"),
app = express(),
mongoose = require("mongoose");
const CONNECTION_URL = process.env.MONGODB_URL || 'mongodb://localhost/form_user';
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }))
//Connecting to mongoDB
//mongoose.connect("mongodb://localhost/form_user",{useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
 
mongoose.connect("mongodb+srv://ramakrishnan:Ramkri@01@cluster0-hdk17.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    /* useUnifiedTopology: true */
}).then(() => {
    console.log("connect to DB!")
 
}).catch(err => {
    console.log("ERROR", err.message);
});
//Routes

app.get("/",function(req,res){
	res.render("form.ejs");
});
app.post("/",function(req,res){
 var x = {
 	first_name: req.body.first_name,
 	last_name: req.body.last_name,
    dob: req.body.dob,
	revenue: req.body.revenue,
	address: req.body.address,
	phone: req.body.phone,
	email: req.body.email
 };
	User.create(x,function(err,user){
		if(err)
		{
			alert("OOOPS!!!!!Some error plz fill it again");
			res.redirect("/users/new");
		}
		else
		{
				res.render("result.ejs");
		}
	});
  });
app.listen(PORT, function(){
	console.log("Server has started");
});
