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

export default router;