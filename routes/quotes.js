const express = require("express");
const router = express.Router();
const quotes = require("../services/quotes");

/* GET quotes listing. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await quotes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
  try {
    res.json(await quotes.create(req.body));
  } catch (err) {
    console.error(`Error while posting quotes `, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await quotes.editQuote(req.body, req.params.id));
  } catch (err) {
    console.error(`Error while updating quotes `, err.message);
    next(err);
  }
})

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await quotes.deleteQuote(req.params.id))
  } catch (err) {
    console.error(`Error while deleting quotes `, err.message);
    next(err);
  }
})

module.exports = router;
