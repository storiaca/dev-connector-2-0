const express = require("express");
const router = express.Router();

/**
 * @route   GET api/profile
 * @desc    Tests users route
 * @access  Public
 */
router.get("/", (req, res) => res.send({ msg: "Profile Works" }));

module.exports = router;
