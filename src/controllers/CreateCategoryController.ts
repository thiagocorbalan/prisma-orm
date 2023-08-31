import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const product = await prismaClient.category.create({
            data: { name }
        	}
        )

        return res.json(product);
    }
}
