const router = require("express").Router();
const api = require("./api");
const Tweet = require("../database/models/tweet.model");

router.use("/api", api);

router.get("/tweets/new", (req, res) => {
  res.render("tweets/tweet-form.pug");
});

router.get("/", (req, res) => {
  Tweet.find({})
    .exec()
    .then((tweets) => {
      res.render("tweets/tweet-list.pug", { tweets });
    });
});

module.exports = router;
