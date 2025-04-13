import express from "express";
import database from "../db/conn.mjs";
import fs from 'fs';
import csv from 'csv-parser';

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await database.collection("stocks");
  let results = await collection.find({})
    .toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  const data = [];
  try {
    fs.createReadStream("/Users/jvelasquez/Downloads/Project 1/Data/extraction/Netflix_Stock.csv")
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', async () => {
      try {
        const collection = database.collection("stocks");
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents inserted`);
      } catch (error) {
        console.error('Error uploading CSV:', error);
      }
    });
  } catch (error) {
    res.send(error).status(400);

  }
  res.send().status(200);
});

export default router;