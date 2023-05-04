const { Router } = require("express");
const router = Router();
const { getAllBrands, getBrandById, createBrand, updateBrand, deleteBrand } = require("../controllers/brandsController");

router.get('/', getAllBrands);
router.get('/:id', getBrandById);
router.post('/', createBrand);
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);

module.exports = router;