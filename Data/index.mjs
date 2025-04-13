import express from "express";
import cors from "cors";
import stocks from "./routes/stocks.mjs";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/stocks", stocks);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});