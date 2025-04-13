import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI || "";

const client = new MongoClient(connectionString);

try {
  console.log("Connecting to MongoDB...");
  await client.connect();
} catch(e) {
  console.error(e);
}

console.log("Connected to MongoDB");
const database = client.db("Netflix");

export default database;