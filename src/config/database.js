require('dotenv').config();

// Configurando o mariaDB para o sequelizer
module.exports = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'update_at'
    },
    dialectOptions: {
        timezone: 'Z'
    },
    timezone: '-03:00'
}