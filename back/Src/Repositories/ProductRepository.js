import Return from '../Models/Return';
import Product from '../Models/Product';
import SequelizeConnection from '../Connections/SequelizeConnection';

class ProductRepository extends SequelizeConnection {
    constructor() {
        super();
    }

    async getAll() {
        let results = await Product.findAll({
            attributes: [
                'id',
                'nome',
                'urlImage',
                'descricao',
                'valor',
            ]
        });

        if (results.length === 0)
            return new Return(400, 'Nenhum produto localizado', results)
        return new Return(200, 'OK', results);
    }
    async get(id) {
        let results = await Product.findOne({
            attributes: [
                'id',
                'nome',
                'urlImage',
                'descricao',
                'valor',
            ],            
			where: {
				id
			}
        });

        if (results.length === 0)
            return new Return(400, 'Nenhum produto localizado', results)
        return new Return(200, 'OK', results);
    }
}
export default new ProductRepository();