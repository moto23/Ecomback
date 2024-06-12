// product.js
import express from 'express';
import { createProduct, getProductsBySlug, getProductDetailsById, deleteProductById, getProducts } from '../controller/product-controller.js';
import { getCategories } from '../controller/categoryC.js';

const router = express.Router();

router.post('/product/create', createProduct);
router.get('/product/:slug', getProductsBySlug);
router.get('/product/details/:productId', getProductDetailsById);
router.delete('/product/delete', deleteProductById);
router.get('/products', getProducts);
router.get('/category/getcategory', getCategories);

export default router;
