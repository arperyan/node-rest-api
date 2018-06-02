const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requets to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requets to /orders'
    });
});

router.get('/:ordersId', (req, res, next) => {
    const id = req.params.ordersId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }

});

router.patch('/:ordersId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Orders',
    });
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Orders',
    });
});

module.exports = router;