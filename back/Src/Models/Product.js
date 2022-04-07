import Sequelize, { Model } from 'sequelize';

import { GET_DATE_FORMAT, SET_DATE_FORMAT } from '../Configurations/Constants';

export default class Product extends Model
{
	static init(sequelize)
	{
		super.init({
			nome: Sequelize.STRING(80),
			urlImage: Sequelize.STRING(300),
			descricao: Sequelize.STRING(1000),
			valor: Sequelize.DECIMAL(6, 2),
		},
			{
				sequelize,
				freezeTableName: true,
			});

		return this;
	}
}
