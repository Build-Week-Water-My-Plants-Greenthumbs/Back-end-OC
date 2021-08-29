// Update with your config settings.
const pg = require('pg');

const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: {
    afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done),
  },
};

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/water-my-plants.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: './data/migrations' },
    useNullAsDefault: true,
  },
};
