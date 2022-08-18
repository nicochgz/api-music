const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/session');
const uploadMiddleware = require('../utils/handleStorage');
const {validatorGetItem} = require('../validators/storage');
const {getItems, 
    getItem, 
    updateItem, 
    deleteItem,
    createItem } = require('../controllers/storage');

/**
 * Lista de items
 */
router.get('/', authMiddleware, getItems);
/**
 * Detalle de item
 */
router.get('/:id', authMiddleware, validatorGetItem, getItem);
/**
 * Eliminar item
 */
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);
/**
 * Crear item
 */
router.post('/', authMiddleware, uploadMiddleware.single('myfile'), createItem);


module.exports = router;