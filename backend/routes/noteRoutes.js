const express = require("express");
const { getNotes } = require("../controllers/noteController");
const { protect } = require("../middlewares/authMIddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
// router.route("/create").post();
// router.route("/:id").get().put().delete();

module.exports = router;