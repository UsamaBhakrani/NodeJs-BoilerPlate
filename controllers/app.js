const getAllProducts = async (req, res) => {
  res.json({ hello: "hello" });
};
const getSingleProduct = async (req, res) => {
  console.log("Get Single Products");
};
const deleteProduct = async (req, res) => {
  console.log("Delete Product");
};
const updateProduct = async (req, res) => {
  console.log("update Product");
};
const createProduct = async (req, res) => {
  console.log("Create Product");
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
