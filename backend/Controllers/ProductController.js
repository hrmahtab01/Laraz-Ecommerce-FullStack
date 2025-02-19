const productModel = require("../Model/productModel");
const fs = require("fs");
const path = require("path");
const categoryModel = require("../Model/categoryModel");
const StoreModel = require("../Model/storeModel");
const { error } = require("console");
const { env } = require("process");

async function createproductController(req, res) {
  const {
    name,
    description,
    sellingprice,
    discountprice,
    category,
    store,
    stock,
    isfeature,
  } = req.body;

  const image = req.files ? req.files.map((img) => img.filename) : [];

  // if (!name || !description || !sellingprice || !discountprice || !category || !store) {
  //   return res.status(400).send({ error: "All fields are required" });
  // }
  if (image.length === 0) {
    return res.status(400).send({ error: "Image is required" });
  }

  try {
    const product = await productModel.create({
      name,
      description,
      sellingprice,
      discountprice,
      category,
      stock,
      isfeature,
      store,
      image: image.map((img) => process.env.host_url + img),
    });

    await categoryModel.findOneAndUpdate(
      { _id: category },
      { $push: { product: product._id } },
      { new: true }
    );

    await StoreModel.findOneAndUpdate(
      { _id: store },
      { $push: { product: product._id } },
      { new: true }
    );

    return res.status(201).send({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

async function deleteproductController(req, res) {
  const { id } = req.params;

  try {
    const exitproduct = await productModel.findOneAndDelete({ _id: id });
    if (!exitproduct) {
      return res
        .status(404)
        .send({ success: false, message: "product not found" });
    }

    const productiamge = exitproduct.image;
    productiamge.forEach((img) => {
      let imagepath = img.split("/");
      let mainpath = imagepath[imagepath.length - 1];
      fs.unlink(
        path.join(__dirname, `${"../uploads"}/${mainpath}`),
        (error) => {
          if (error) {
            return res
              .status(500)
              .send({ success: false, message: error.message });
          }
        }
      );
    });
    return res.status(200).send({
      success: true,
      message: "product deleted successfully",
      data: exitproduct,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}

async function getallProductController(req, res) {
  try {
    const allproduct = await productModel.find({});
    return res.status(200).send({
      success: true,
      message: "get all product successfully",
      data: allproduct,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}

async function isfeaturedController(req, res) {
  const { id } = req.params;

  try {
    const isfeature = await productModel.findOne({ _id: id });
    if (!isfeature) {
      return res
        .status(404)
        .send({ success: false, message: "product not found" });
    }
    isfeature.isfeature = true;
    await isfeature.save();

    return res.status(200).send({
      success: true,
      message: "product isfeature true successfully",
      data: isfeature,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}
async function getfeatureproduct(req, res) {
  try {
    const isfeature = await productModel.find({ isfeature: true });
    if (!isfeature) {
      return res
        .status(404)
        .send({ success: false, message: "product not found" });
    }
    return res.status(200).send({
      success: true,
      message: "features product get successfully",
      data: isfeature,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}

async function getsingleproductController(req, res) {
  const { id } = req.params;

  try {
    const singleproduct = await productModel.findOne({ _id: id });

    if (!singleproduct) {
      return res
        .status(404)
        .send({ success: false, message: "product not found" });
    }
    return res.status(200).send({
      success: true,
      message: "get single product successfully",
      data: singleproduct,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "something went wronh",
    });
  }
}

async function updateProductController(req, res) {
  const { id } = req.params;
  const {
    name,
    description,
    sellingprice,
    discountprice,
    category,
    store,
    stock,
    isfeature,
  } = req.body;

  const newImages = req.files ? req.files.map((img) => img.filename) : [];

  try {
  
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).send({ success: false, message: "Product not found" });
    }

   
    if (newImages.length > 0 && product.image) {
      await Promise.all(
        product.image.map(async (img) => {
          try {
            let imagePath = path.join(__dirname, "../uploads", img.split("/").pop());
            await fs.promises.unlink(imagePath); 
          } catch (error) {
            console.error("Error deleting file:", error.message);
          }
        })
      );
    }

   
    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        sellingprice,
        discountprice,
        category,
        stock,
        isfeature,
        store,
        image: newImages.length > 0 ? newImages.map((img) => process.env.host_url + img) : product.image,
      },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Update Product Error:", error);
    return res.status(500).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

module.exports = {
  createproductController,
  deleteproductController,
  getallProductController,
  isfeaturedController,
  getfeatureproduct,
  getsingleproductController,
  updateProductController,
};
