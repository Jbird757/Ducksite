let express = require("express");
let app = new express();
//app.use(express.static(__dirname + '/assets'));
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine","ejs");

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"rubberducks-db.clipanmlocon.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "ducksarethebest",
  database:"duckdb",
  port: 3306,
 },
});

app.get("/",(req,res) => {
knex
.select()
.from("ducks")
.then((result) => {
console.log(result);
res.render("index",{aDuckList: result});
});
});
app.listen(3000);