const getAllProducts = async (req, res) => {
  res.json({ hello: "hello" });
};
const getSingleProduct = async (req, res) => {
  res.json({ hello: "Get Single Product" });
};
const deleteProduct = async (req, res) => {
  res.json({ hello: "Delete Product" });
};
const updateProduct = async (req, res) => {
  res.json({ hello: "Update Product" });
};
const createProduct = async (req, res) => {
  res.json({ hello: "Create Product" });

};

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
