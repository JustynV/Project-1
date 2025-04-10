import { MongoClient } from "mongodb";
const connectionString = `mongodb+srv://justynvelasquez21:${db_password}@main.6xfnnhr.mongodb.net/?retryWrites=true&w=majority&appName=main`;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("sample_training");
export default db;

