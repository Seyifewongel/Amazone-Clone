/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const functions = require("firebase-functions");
// https://github.com/natnaelmeq/Amazon-Clone/blob/main/amazon-Full-stack/functions/index.js

// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51ONbjeL43N7j06gVGDjSwgdI4tUuBvVf6tDBbQ0Jf2T2conHBnFZjc5hwPz9GgLkbnTnmNqrHS9R6UDIDAOKABhI00xX0zVD5W"
// );

// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;
//   console.log("Payment Request Recieved for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });
//   console.log(paymentIntent);
//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);

// //http://127.0.0.1:5001/clone-project-796c1/us-central1/api
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const functions = require("firebase-functions");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY); // secret key
// console.log(process.env.STRIPE_PRIVATE_KEY);
//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  try {
    console.log("payment Request Recived for this amount>>>", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: "USD",
    });
    //ok-created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    response.status(500).send("server error");
    console.log(error);
  }
});
app.listen(10000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listenig 10000");
  }
});

// listen command
// exports.api = functions.https.onRequest(app);
// run firebase emulators:start

//http://127.0.0.1:5001/clone-54cab/us-central1/api
