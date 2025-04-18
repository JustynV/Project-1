import express from "express";
import cors from "cors";
import stocks from "./routes/stocks.mjs";
import reviews from "./routes/reviews.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/stocks", stocks);
app.use("/reviews", reviews);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured. "+err)
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});