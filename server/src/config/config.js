module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'mymusic',
    user: process.env.DB_USER || 'mymusic',
    password: process.env.DB_PASS || 'mymusic',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './mymusic/sqlite',
      operatorsAliases: false
    }
  }
}
