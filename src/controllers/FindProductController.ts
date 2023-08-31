import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

				const product = await prismaClient.product.findFirst({
					where: {
						id
					},
					include: {
						ProductCategory: {
							select: {
								category: {
									select: {
										name: true
									}
								}
							}
						}
					}
				});

        return res.json(product);
    }
}
