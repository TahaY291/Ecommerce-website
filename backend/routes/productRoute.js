import express  from 'express'
import { listProduct, addProduct , removeProduct , singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';

const productRouter = express.Router();


productRouter.post('/add', upload.fields([{name: 'image1', maxCount: 1},{name: 'image2', maxCount: 2},{name: 'image3', maxCount: 3},{name: 'image4', maxCount: 4}]) , addProduct)
productRouter.post('/remove',  removeProduct)
productRouter.get('/list',  listProduct)
productRouter.post('/single',  singleProduct)

export default productRouter;