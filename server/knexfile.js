module.exports = {
    development: {
        client: process.env.DB_CONNECTION || 'mysql',
        connection: {
            host: process.env.DB_HOST || '127.0.0.1',
            user: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'nganthu',
            database: process.env.DB_DATABASE || 'documents',
            port: process.env.DB_PORT || '3306',
        }
    },
};
