import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();

router.get('/', (req, res) => res.send({ msg: 'Hello World!'}));
router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);

export { router };
