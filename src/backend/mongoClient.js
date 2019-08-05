const express = require("express");
const MongoClient = require("mongodb").MongoClient;
var cors = require('cors');

const app = express();
app.use(cors());
const jsonParser = express.json();

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

let dbClient;

mongoClient.connect(function (err, client) {

  if (err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("usersdb").collection("users");
  app.listen(3001, function () {
    console.log("Сервер ожидает подключения...");
  });
});

app.post("/", jsonParser, function (req, res) {

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