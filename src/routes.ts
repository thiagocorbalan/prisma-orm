import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const router = Router();

const createProduct = new CreateProductController();

router.get('/', (req, res) => res.send({ msg: 'Hello World!'}));
router.post('/product', createProduct.handle);

export { router };
