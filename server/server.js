if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  process.env.STRIPE_KEY
);

const port = process.env.PORT


const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;

  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(port, () => console.log(`listening on port ${port}`));
