const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcz9h.mongodb.net/sagarWatches?retryWrites=true&w=majority`;

const client = new MongoClient(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = require("./product");

async function run() {
  try {
    await client.connect();

    const database = client.db("sagarWatches");
    const Products = database.collection("products");
    const Users = database.collection("users");

    // get all products
    app.get("/products", async (req, res) => {
      try {
        const products = await Products.find({}).toArray();
        res.status(200).json({
          products,
          status: "success",
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
        });
      }
    });

    // create products
    app.post("/products", async (req, res) => {
      try {
        const producs = await Products.insertMany(products);
        res.status(200).json({
          products,
          status: "success",
        });
      } catch (err) {}
    });

    app.delete("/products", async (req, res) => {
      try {
        const products = Products.deleteMany({});
        res.status(204).json({
          status: "success",
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          status: "fail",
        });
      }
    });
  } finally {
    // await client.close();
  }
}

run().catch(console.dir());

app.get("/", (req, res) => {
  res.send("Hello from server side sagar watch");
});

app.listen(port, () => {
  console.log("Your app listening or port ", port);
});
