var express = require('express');
var router = express.Router();
var modelProducts = require('../model/Model_Products');

// API thêm sản phẩm
router.post('/addProducts', async (req, res) => {
    try {
        const { image, name, price, describe, categoryID } = req.body;

        const objectProducts = { image, name, price, describe, categoryID };
        await modelProducts.create(objectProducts);
        res.status(200).json({ status: true, message: 'Thêm sản phẩm mới thành công' });
    } catch (e) {
        res.status(404).json({ status: false, message: 'Thêm sản phẩm mới thất bại' });
    }
});

// API lấy danh sách sản phẩm
router.get('/getAllProducts', async (req, res) => {
    try {
        const listProducts = await modelProducts.find();
        res.status(200).json({ status: true, data: listProducts });
    } catch (e) {
        res.status(404).json({ status: false, data: "Not found" });
    }
});

// API lấy danh sách sản phẩm theo loại
router.get('/getProductsByCategory', async (req, res) => {
    try {
        const { categoryID } = req.query;
        const listProducts = await modelProducts.find({ categoryID: categoryID });
        res.status(200).json({ status: true, data: listProducts });
    } catch (e) {
        res.status(404).json({ status: false, data: "Not found" });
    }
})

// API lấy thông tin của một sản phẩm
router.get('/getProduct', async (req, res) => {
    try {
        const { productID } = req.query;
        const product = await modelProducts.findOne({ id: productID });
        res.status(200).json({ status: true, data: product });
    } catch (e) {
        res.status(404).json({ status: false, data: "Not found" });
    }
})

module.exports = router