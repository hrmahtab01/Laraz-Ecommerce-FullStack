const express = require("express");
const {
  createproductController,
  deleteproductController,
  getallProductController,
  isfeaturedController,
  getfeatureproduct,
  getsingleproductController,
  updateProductController,
} = require("../../Controllers/ProductController");
const multer = require("multer");
const getusermiddleware = require("../../Middleware/getusermiddleware");
const Checkadminmiddleware = require("../../Middleware/CheckAdminmiddleware");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniquefilename = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extention = file.originalname.split(".");
    cb(
      null,
      file.fieldname +
        "-" +
        `${uniquefilename}.${extention[extention.length - 1]}`
    );
  },
});

const upload = multer({ storage: storage });
const multerErrorCheck = (error, req, res, next) => {
  if (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

router.post(
  "/createproduct",
  Checkadminmiddleware,
  upload.array("image"),
  multerErrorCheck,
  createproductController
);

router.delete("/deleteproduct/:id", Checkadminmiddleware, deleteproductController);
router.get("/allproduct", getallProductController);
router.patch("/isfeatured/:id", Checkadminmiddleware, isfeaturedController);
router.get("/featuredproduct", getfeatureproduct);
router.get("/singleproduct/:id", getsingleproductController);
router.patch("/updateproduct/:id" , Checkadminmiddleware ,multerErrorCheck, upload.array("image"), updateProductController )

module.exports = router;
