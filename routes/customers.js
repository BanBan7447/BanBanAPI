var express = require('express');
var router = express.Router();
var modelCustomers = require('../model/Model_Customers');

// API Đăng Ký
router.post('/SignUp', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const objectCustomer = { name, email, password };
        await modelCustomers.create(objectCustomer);
        res.status(200).json({ status: true, message: 'Đăng ký thành công' })
    } catch (e) {
        res.status(404).json({ status: false, message: 'Đăng ký thất bại' })
    }
});

// API Đăng nhập
router.post('/SignIn', async (req, res) => {
    try {
        const {email, password} = req.body;

        var checkCustomer = await modelCustomers.findOne({
            email: email,
            password: password,
        });

        if(checkCustomer){
            res.status(200).json({status: true, message: 'Đăng nhập thành công'});
        }else{
            res.status(400).json({status: false, message: 'Email hoặc Password sai'});
        }
    } catch (e) {
        res.status(404).json({status: false, message: 'Đăng nhập thất bại'});
    }
})

module.exports = router