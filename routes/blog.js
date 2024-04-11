const { Router } = require("express");
const router = Router();

router("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

module.exports = router;
