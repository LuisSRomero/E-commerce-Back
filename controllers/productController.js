const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll({ where: { categoryId: req.params.categoryId } });
  res.json(products);
}

// Display a listing of the resource.
async function indexFeatured(req, res) {
  const featuredProducts = await Product.findAll({ where: { featured: true } });
  res.json(featuredProducts);
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({ where: { productName: req.params.productName } });
  res.json(product);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  indexFeatured,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
