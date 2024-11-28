var express = require('express');
var router = express.Router();
var modelCategories = require('../model/Model_Categories');

router.post('/addCategories', async (req, res) => {
    try{
        const {name} = req.query;
        const objectCate = {name};
        await modelCategories.create(objectCate);
        res.status(200).json({status: true, message: 'Thêm loại sản phẩm mới thành công'});
    }catch(e){
        res.status(404).json({status: false, message: 'Thêm loại sản phẩm mới thất bại'});
    }
});

router.get('/getCategories', async (req, res) => {
    try{
        const listCategories = await modelCategories.find()
        res.status(200).json({status: true, data: listCategories});
    }catch(e){
        res.status(404).json({status: false, data: 'Not found'});
    }
})

module.exports = router