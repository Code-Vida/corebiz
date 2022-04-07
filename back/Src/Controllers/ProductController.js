import ProductService from "../Services/ProductService";
import ExpressSwagger from 'express-swagger-delta';

class ProductController
{
	setRoutes()
	{
		ExpressSwagger.Server.addRoute({
			method: 'GET',
			path: '/product',
			tags: ['Product'], 
			summary: 'Recupera todos os produtos.',
			responses: {
				200: {
					description: 'Chamada executada com sucesso.',
					$ref: '#/components/responses/default'
				},
				400: {
					description: 'Chamada executada com erros.',
					$ref: '#/components/responses/default'
				},
				401: {
					description: 'Inautorizado! Verifique os headers.',
					$ref: '#/components/responses/default'
				}
			},
			handler: async (req) =>
			{
				return await ProductService.getAll();
			}
		});

        ExpressSwagger.Server.addRoute({
			method: 'GET',
			path: '/product/:id',
			tags: ['Product'], 
			summary: 'Recupera todos os produtos.',
			responses: {
				200: {
					description: 'Chamada executada com sucesso.',
					$ref: '#/components/responses/default'
				},
				400: {
					description: 'Chamada executada com erros.',
					$ref: '#/components/responses/default'
				},
				401: {
					description: 'Inautorizado! Verifique os headers.',
					$ref: '#/components/responses/default'
				}
			},
			handler: async (req) =>
			{
                let { id } = req.params
                if (!id)
                return new Return(201, 'Parâmetro `id` não encontrado!');
				return await ProductService.get(id);
			}
		});
    }
}
export default new ProductController();