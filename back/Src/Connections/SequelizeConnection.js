import Sequelize from 'sequelize';

import Database from '../Database/Index';

import Log from '../Models/Log';
import Product from '../Models/Product';
const models = [
  Log,
  Product
];

export default class SequelizeConnection
{
  constructor()
  {
    this.init();
  }

  init()
  {
    this.connection = new Sequelize(Database);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
