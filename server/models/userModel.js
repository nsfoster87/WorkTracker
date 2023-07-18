const pool = require('../../db/index.js');

const createUser = async ({ username, password, salt }) => {
  const query = 'INSERT INTO users (username, password, salt) VALUES ($1, $2, $3) RETURNING id';
  const values = [username, password, salt];

  const client = await pool.connect();
  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(`Error inserting new user ${username} into db`, error);
    throw error;
  } finally {
    client.release();
  }
};

const findByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];

  const client = await pool.connect();
  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.log(`Error fetching user ${username} from db`, error);
    throw error;
  } finally {
    client.release();
  }
};

module.exports = { createUser, findByUsername };