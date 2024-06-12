import { addCategory, getCategories } from '../controller/categoryC.js';
import express from 'express';

const router = express.Router();

router.post('/category/create', addCategory);
router.get('/category/getcategory', getCategories);

export default router;
