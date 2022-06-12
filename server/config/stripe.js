const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, success) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(success);
      }
    }
  );
});

module.exports = router;