const router = require("express").Router();
const { newUser, getOne, getAll } = require("../controllers/controller")

router.post("/", newUser);
router.get("/:id", getOne);
router.get("/", getAll);
module.exports = router;