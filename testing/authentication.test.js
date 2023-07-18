const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');
const { authenticate, addNewUser, loginUser } = require('../server/controllers/authController');
const hashUtils = require('../server/utils/hashUtils');

describe('Authentication', () => {
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

  describe('authenticate', () => {
    let username;
    let password;
    beforeAll(async () => {
      username = 'testuser';
      password = 'password';
      const salt = hashUtils.createRandom32String();
      const hashedPassword = hashUtils.createHash(password, salt);

      const query = 'INSERT INTO users (username, password, salt) VALUES ($1, $2, $3)';
      const values = [username, hashedPassword, salt];
      const addUser = await pool.query(query, values);
    });
    it.skip('should return true for an existing user in the database', async () => {

    });
    it.skip('should return false for a user not in the database', async () => {

    });
    it.skip('should return false for a user with an incorrect password', async () => {

    });
  });

  describe.skip('addNewUser', () => {

  });

  describe.skip('loginUser', () => {

  });
});