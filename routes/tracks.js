const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/session');
const checkRol = require('../middlewares/rol');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

/**
 * Lista los items
 */
router.get('/', authMiddleware, getItems);

/**
 * Obtener detalle de item
 */
 router.get('/:id', authMiddleware, validatorGetItem, getItem);

/**
 * Crear un registro
 */
router.post('/', 
authMiddleware,
checkRol(['admin', 'artist', 'user']),
validatorCreateItem, 
createItem);

/**
 * Actualizar un registro
 */
 router.put('/:id',checkRol(['admin', 'artist']), authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un registro
 */
 router.delete('/:id',checkRol(['admin', 'artist']), authMiddleware, validatorGetItem, deleteItem);

module.exports = router;