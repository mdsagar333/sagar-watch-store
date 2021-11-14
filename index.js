const path = require("path");
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const multer = require("multer");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();

// uploads options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const imageName = `${Date.now()}${Math.round(Math.random() * 2000)}.${ext}`;

    cb(null, imageName);
  },
});

// globa middleware
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

// image upload middleware
const upload = multer({ storage: storage });

// database url
const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tcz9h.mongodb.net/sagarWatches?retryWrites=true&w=majority`;

// conneting mongodb
const client = new MongoClient(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogs = require("./blogs");

async function run() {
  try {
    await client.connect();

    const database = client.db("sagarWatches");
    const Products = database.collection("products");
    const Orders = database.collection("orders");
    const Users = database.collection("users");
    const Reviews = database.collection("reviews");
    const Blogs = database.collection("blogs");

    // get all products
    app.get("/products", async (req, res) => {
      try {
        const limit = parseInt(req.query.limit) || 100;

        console.log(limit);
        const products = await Products.find({}).limit(limit).toArray();
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
    app.post("/products", upload.single("image"), async (req, res) => {
      try {
        const imagePath = `${req.protocol}://${req.headers.host}/images/${req.file.filename}`;
        const productData = req.body;
        const product = {
          ...productData,
          feature: JSON.parse(productData.feature),
        };
        const addedProduct = await Products.insertOne({
          ...product,
          image: imagePath,
        });

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
    app.delete("/products/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const productId = new mongodb.ObjectId(id);
        const products = Products.deleteOne({ _id: productId });
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

    // get products against array of product id

    app.post("/product-selected", async (req, res) => {
      try {
        const productArr = req.body;
        const productID = productArr.map((id) => new mongodb.ObjectId(id));
        const selectedProducts = await Products.find({
          _id: { $in: productID },
        }).toArray();
        res.status(200).json({
          status: "success",
          products: selectedProducts,
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

    // create order from cart
    app.post("/cart-orders", async (req, res) => {
      try {
        const data = req.body;
        const dataWithStatus = data.map((order) => {
          return { ...order, isPending: true };
        });

        console.log(dataWithStatus);
        // const addedOrder = await Orders.insertMany({ ...data, isPending: true });

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

    // get all order with id api
    app.get("/orders/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const allOrders = await Orders.find({ userUID: id }).toArray();
        console.log("from all order with id", allOrders);
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

    // update order item with ID api
    app.patch("/orders/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const orderId = new mongodb.ObjectId(id);
        const updatedOrder = await Orders.updateOne(
          { _id: orderId },
          {
            $set: { isPending: false },
          }
        );

        res.status(200).json({
          status: "success",
        });
      } catch (err) {
        res.status(500).json({
          error: err.message,
          status: "fail",
        });
      }
    });

    // delete order item with ID api
    app.delete("/orders/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const deleteID = new mongodb.ObjectId(id);
        const deleteOrder = await Orders.deleteOne({ _id: deleteID });
        res.status(204).json({
          status: "success",
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
        const addUser = await Users.insertOne({ ...user });
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

    // get all users

    app.get("/users", async (req, res) => {
      try {
        const allUsers = await Users.find({}).toArray();

        res.status(200).json({
          status: "success",
          users: allUsers,
        });
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
        const user = { ...req.body, role: "user" };
        let filterQuery;
        if (user.email) {
          filterQuery = { email: user.email };
        } else {
          filterQuery = { userUID: user.userUID };
        }
        const addedUser = await Users.updateOne(
          filterQuery,
          { $set: user },
          { upsert: true }
        );

        res.status(201).json({
          status: "success",
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // make admin api endpoint
    app.post("/users/admin", async (req, res) => {
      try {
        const filterQuery = req.body;
        const Admin = await Users.updateOne(filterQuery, {
          $set: { role: "admin" },
        });
        console.log(Admin);
        if (Admin.acknowledged === true) {
          res.status(201).json({
            status: "success",
          });
        }
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // get admin api endpoint
    app.get("/users/admin/:uid", async (req, res) => {
      try {
        const uid = req.params.uid;
        let admin = false;
        const user = await Users.findOne({ userUID: uid });
        if (user) {
          if (user.role === "admin") {
            admin = true;
          }
        }
        res.status(200).json({ isAdmin: admin });
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

    // get all reviews
    app.get("/reviews", async (req, res) => {
      try {
        const reviews = await Reviews.find({}).toArray();

        res.status(200).json({
          status: "success",
          reviews,
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // create bolg api
    app.post("/blogs", async (req, res) => {
      try {
        const blogData = req.body;
        const addBlog = await Blogs.insertMany(blogs);
        res.status(201).json({
          status: "success",
          addBlog,
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // get all blogs

    app.get("/blogs", async (req, res) => {
      try {
        const blogs = await Blogs.find({}).toArray();
        res.status(200).json({
          status: "success",
          blogs,
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          error: err.message,
        });
      }
    });

    // get blogs by id
    app.get("/blogs/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const blogID = new mongodb.ObjectId(id);
        const blog = await Blogs.findOne({ _id: blogID });
        res.status(200).json({
          status: "success",
          blog,
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
