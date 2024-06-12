import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import paymentController from '../controllers/paymentController';


const paymentRoute = express.Router();

paymentRoute.use(bodyParser.json());
paymentRoute.use(bodyParser.urlencoded({ extended: false }));

paymentRoute.set('view engine', 'ejs');
paymentRoute.set('views', path.join(__dirname, '../views'));

// Route for rendering product page
paymentRoute.get('/', paymentController.renderProductPage);

// Route for creating order (Razorpay integration)
paymentRoute.post('/createOrder', paymentController.createOrder);

// Route for handling Razorpay payment success callback
paymentRoute.post('/payment/success', paymentController.handlePaymentSuccess);

// Route for handling Razorpay payment failure callback
paymentRoute.post('/payment/failure', paymentController.handlePaymentFailure);

export default paymentRoute;
