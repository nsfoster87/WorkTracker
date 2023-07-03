const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');

describe('Database', () => {
  describe('Connecting to Test Database', () => {

    const pool = new Pool({
      user: 'testuser',
      host: 'localhost',
      database: 'test',
      password: 'pword',
      port: 5432
    });
    let client;

    beforeAll(async () => {
      client = await pool.connect();
      const createTables = fs.readFileSync(path.join(__dirname, '../db/schema.sql')).toString();
      await pool.query(createTables);
    });

    afterAll(async () => {
      const dropTables = fs.readFileSync(path.join(__dirname, '../db/droptables.sql')).toString();
      await pool.query(dropTables);
      client.release();
      await pool.end();
    });

    it('should connect to test database with all the tables', async () => {
      const tables = await pool.query(
        "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
      );
      console.log(tables.rows);
      expect(tables.rows.length).toBe(8);

      const emptyQuery = await pool.query('SELECT * FROM locations');
      expect(emptyQuery.rows.length).toBe(0);
    });
  });
});