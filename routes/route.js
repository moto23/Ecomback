import express from 'express';
import { userSignUp, userLogin } from '../controller/usercontroller.js';
import { getProductById, getProducts } from '../controller/product-controller.js';



const router = express.Router();

// Define valid callback functions for the POST routes
router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);




export default router;
