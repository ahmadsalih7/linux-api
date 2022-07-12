const express = require("express");
const router = express.Router();

// Root page response
router.get("/", (req, res) => {
  res.status(200).send({ healthy: true });
});

module.exports = router;
