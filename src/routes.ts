import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from './controllers/CreateProductCategoryController';
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWhitExistCategoryController } from "./controllers/CreateProductWithExistCategory";
import { FindCategoryController } from './controllers/FindCategoryController';
import { FindProductController } from './controllers/FindProductController';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWhitExistCategory = new CreateProductWhitExistCategoryController();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.get('/', (req, res) => res.send({ msg: 'Hello World!'}));
router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);
router.post('/categoryProduct', createProductCategory.handle);
router.post('/productWithCategory', createProductWhitExistCategory.handle);

router.get('/product/:id', findProduct.handle);
router.get('/category/:id', findCategory.handle);

export { router };
