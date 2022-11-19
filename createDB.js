var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
   try {
      await client.connect();
      var database = client.db("solarsystem");
      database.dropDatabase()
      database = client.db("solarsystem");
      const planet = database.collection("planet");
      const result = await planet.insertOne({ name: "Mars" });
      console.log(`${result} documents were inserted`);
   } finally {
      await client.close();
   }
}
run()
