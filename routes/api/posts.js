const express = require("express");
const router = express.Router();

/**
 * @route   GET api/posts
 * @desc    Tests users route
 * @access  Public
 */
router.get("/", (req, res) => res.send({ msg: "Posts Works" }));

module.exports = router;
