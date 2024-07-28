const express = require("express");
const { getAsync } = require("../redis");
const router = express.Router();

router.get("/", async (req, res) => {
    const counter = Number(await getAsync("counter")) ?? 0;
    const response = {added_todos: counter}
    res.json(response);
});

module.exports = router;