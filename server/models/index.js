const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env]
const db = {};

let sequelize = new Sequelize(
  //mysql 연결객체 생성 
  config.database,
  config.username,
  config.password,
  config,
  {
      define: {
          charset: 'utf8',
          collate: 'utf8_general_ci',
      },
      dialectOptions: {
        timezone: 'Etc/GMT-9', // 서울 시간대 (GMT+9)
      },
      
  },
  
  
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database: ', err);
    });


db.User = require('./user')(sequelize, Sequelize);
db.Tool = require('./tool')(sequelize, Sequelize);
db.Rental = require('./rental')(sequelize, Sequelize);
db.Repair = require('./repair')(sequelize, Sequelize);
db.Log = require('./log')(sequelize, Sequelize);
db.Img = require('./img')(sequelize, Sequelize);
db.University = require('./university')(sequelize, Sequelize);
db.Department = require('./department')(sequelize, Sequelize);

require('./user/foreignKey')(db);
require('./tool/foreignKey')(db);
require('./rental/foreignKey')(db);
require('./repair/foreignKey')(db);
// require('./log/foreignKey')(db);
require('./img/foreignKey')(db);
require('./university/foreignKey')(db);
require('./department/foreignKey')(db);

module.exports = db;