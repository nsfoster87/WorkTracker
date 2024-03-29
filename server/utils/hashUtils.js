const crypto = require('crypto');

/** @module hashUtils */

/**
 * Creates a hash using the sha256 algorithm. The salt is optional.
 * @param {string} data - The data to hash.
 * @param {string} [salt] - The salt to add to the data before hashing.
 * @returns {string} A string with the hashed value.
 */

const createHash = (data, salt = '') => {
  let shasum = crypto.createHash('sha256');
  shasum.update(data + salt);
  return shasum.digest('hex');
};

/**
 * Compares a value and a salt with a previously hashed value.
 * @param {string} attempted - The attempted value.
 * @param {string} stored - The stored hashed value.
 * @param {string} salt - The stored salt value.
 * @returns {boolean} A boolean indicating if the attempted value
 * matches the stored value.
 */

const compareHash = (attempted, stored, salt) => {
  return stored === createHash(attempted, salt);
};

/**
 * Creates a cryptographically secure random 32 byte string.
 * @returns {string} A random string.
 */

const createRandom32String = () => {
  return crypto.randomBytes(32).toString('hex');
};

module.exports = { createHash, compareHash, createRandom32String };