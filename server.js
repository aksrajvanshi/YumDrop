let express = require("express");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let pg = require("pg");
const PORT = 3000;

let pool = new pg.Pool({
  port: 5432,
  password: "Passwd@00",
  database: "yumdrop",
  max: 10,
  host: "localhost",
  user: "postgres"
});

pool.connect((err, db, done) => {
  if (err) {
    return console.log(err);
  } else {
    var name = "{user1}";
    var email = "{user1@gmail.com}";
    var password = "P@0";

    db.query(
      //"INSERT INTO endusers (name,email,password) values ($1,$2,$3)",
      "select * from endusers;",
      (err, table) => {
        if (err) {
          return console.log(err);
        } else {
          console.log(table.rows);
          db.end();
        }
      }
    );
  }
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function(req, res, next) {
  response.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => console.log("Listening on port " + PORT));
