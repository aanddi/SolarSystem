var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
   try {
      await client.connect();
      var database = client.db("threecats");
      database.dropDatabase()
      database = client.db("threecats");
      const cats = database.collection("cats");
      const result = await cats.insertOne({ name: "Барсик" });
      console.log(`${result} documents were inserted`);
   } finally {
      await client.close();
   }
}
run()
