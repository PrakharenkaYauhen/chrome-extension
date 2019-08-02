const express = require("express");
const MongoClient = require("mongodb").MongoClient;
var cors = require('cors');

const app = express();
app.use(cors());
const jsonParser = express.json();

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function (err, client) {

//   const db = client.db("usersdb");
//   const collection = db.collection("users");
//   let user = { name: "Tom", age: 23 };
//   collection.insertOne(user, function (err, result) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(result.ops);
//     client.close();
//   });
// });

let dbClient;

mongoClient.connect(function (err, client) {

  if (err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("usersdb").collection("users");
  app.listen(3001, function () {
    console.log("Сервер ожидает подключения...");
  });
});

app.use(function (req, res, next) {
  console.log(11);
  // res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
  console.log(12);
  next();
});

app.post("/api/users", jsonParser, function (req, res) {

  console.log(13);

  if (!req.body) return res.sendStatus(400);

  const userName = req.body.name;
  const userAge = req.body.age;
  const user = { name: userName, age: userAge };

  const collection = req.app.locals.collection;
  collection.insertOne(user, function (err, result) {

    if (err) return console.log(err);
    res.send(user);
  });
});

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});