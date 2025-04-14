import express from "express";
import database from "../db/conn.mjs";
import fs from "fs"

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await database.collection("reviews");
  let results = await collection.find({})
    .toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  try {
    const filePath = "/Users/jvelasquez/Downloads/Project 1/Data/extraction/opinionsDic.json"
    const data = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    const collection = database.collection("reviews");
    const result = await collection.insertMany(jsonData);
    console.log(`JSON data with ${result.insertedCount}successfully uploaded to MongoDB.`);
    res.send().status(200); 
  } catch (error) {
    console.error('Error uploding file:', error);
    res.status(500).send('Error uploding file: ',error);
  }

});

export default router;