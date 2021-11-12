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
    const Orders = database.collection("orders");
    const Users = database.collection("users");
    const Reviews = database.collection("reviews");

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
          error: err.message,
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
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // delete products
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
          error: err.message,
        });
      }
    });

    // create orders api endpoint
    app.post("/orders", async (req, res) => {
      try {
        const data = req.body;
        console.log(data);
        const addedOrder = await Orders.insertOne({ ...data, isPending: true });

        res.status(201).json({
          status: "success",
          order: addedOrder,
        });
      } catch (err) {
        res.status(500).json({
          error: err.message,
          status: "fail",
        });
      }
    });

    // get all orders
    app.get("/orders", async (req, res) => {
      try {
        const allOrders = await Orders.find({}).toArray();
        res.status(200).json({
          status: "success",
          allOrders,
        });
      } catch (err) {
        res.status(500).json({
          error: err.message,
          status: "fail",
        });
      }
    });

    // create user api endpoint
    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const addUser = await Users.insertOne(user);
        res.status(201).json({
          status: "sucess",
          user: addUser,
        });
        console.log(user);
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // create user from google signin
    app.patch("/users", async (req, res) => {
      try {
        const user = req.body;
        let filterQuery;
        if (user.email) {
          filterQuery = { email: user.email };
        } else {
          filterQuery = { userUID: user.userUID };
        }
        console.log(filterQuery, user);
        const addedUser = await Users.updateOne(
          filterQuery,
          { $set: user },
          { upsert: true }
        );
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // create review endpoint
    app.post("/reviews", async (req, res) => {
      try {
        const review = req.body;
        console.log(review);
        const addedReview = await Reviews.insertOne(review);
        res.status(201).json({
          status: "success",
          review: addedReview,
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
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
