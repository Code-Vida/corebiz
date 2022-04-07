import ProductRepository from '../Repositories/ProductRepository';

class ProductService
{
	async getAll()
	{
		return await ProductRepository.getAll();
	}
	async get(id)
	{
		return await ProductRepository.get(id);
	}
}
export default new ProductService();