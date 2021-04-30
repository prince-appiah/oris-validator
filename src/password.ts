import { randomBytes, pbkdf2Sync } from "crypto";

/**
 * Given an input password a salt and a hash
 * Does the given password match with the hash?
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean}
 */
export const validatePassword = (
  inputPassword: string,
  salt: string,
  storedHash: string
): boolean => {
  const inputHash = pbkdf2Sync(
    inputPassword,
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");

  return storedHash === inputHash;
};

/**
 * @typedef {Object} hashAndSalt
 * @property {string} hash The hash
 * @property {string} salt The salt used for hashing
 */

/**
 * Given a password, hash it with a salt and return the hash and salt
 * @param {string} password
 * @returns {hashAndSalt} Object containing hash and salt used
 */
export const hashPassword = (
  password: string
): { hash: string; salt: string } => {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return { hash, salt };
};
