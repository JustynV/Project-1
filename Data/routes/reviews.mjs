import express from "express";
import database from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const limit = parseInt(req.query.limit) || 100;
  let collection = await database.collection("reviews");
  let results = await collection.find({})
    .limit(limit)
    .toArray();
  res.send(results).status(200);
});

export default router;