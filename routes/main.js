const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} = require("../controllers/app");

router.route("/").get(getAllProducts).post(createProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = router;
