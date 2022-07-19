import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import adminRouter from "./routes/Admin.js";

import pemRoutes from "./routes/pem.js";
import customerRoutes from "./routes/customer.js";
import shopRoutes from "./routes/shop.js";

// Morgan
import morgan from "morgan";

// swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger.js"

// SMS Imports
import twilio from "twilio";
const accountSid = "AC38960bebc221b5d797c102e262e845b8";
const authToken = "47e4353ea948d8b80111c792893901df";
const client = new twilio(accountSid, authToken);

// Payment Imports
import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_TEST);

// creating app
const app = express();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use(cors());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello and Welcome to PEM joy application");
});

//---------------------------------Routes-----------------------------------------


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/pem", pemRoutes);
app.use("/customer", customerRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRouter);

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "PEM",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.get("/send-text", (req, res) => {
  const { recipient, lat, lon, customer } = req.query;

  //Send Text
  client.messages
    .create({
      body: `name of customer ${customer}. location:  https://gps-coordinates.org/my-location.php?lat=${lat}&lng=${lon}`,
      to: "+917013637725", // Text this number
      from: "+19285648843", // From a valid Twilio number
    })
    .then((message) => console.log(message.body))
    .catch((error) => console.log(error.message));
});

const CONNECTION_URL =
  "mongodb+srv://jyotirmoy:jyotirmoy@cluster0.gr07x.mongodb.net/testing?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// connecting mongoDB to server
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
