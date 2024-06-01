const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.staus(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct = async (req, res) => {
  const { sku, quantity, name, images, description } = req.body;
  const product = new Product({
    sku,
    quantity,
    name,
    images,
    description,
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      const { sku, quantity, name, images, description } = req.body;
      product.sku = sku;
      product.quantity = quantity;
      product.name = name;
      product.images = images;
      product.description = description;

      const updateProduct = await product.save();
      res.json(updateProduct);
    } else {
      res.status(404).json({ message: "Prodcut not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
