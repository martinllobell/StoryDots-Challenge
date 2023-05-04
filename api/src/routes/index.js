const { Router } = require('express');
const router = Router();
const products = require('./products');
const brands = require("./brands");

router.use("/brands", brands);
router.use("/products", products);

module.exports = router;
