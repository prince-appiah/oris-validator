"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validatePassword = void 0;
var crypto_1 = require("crypto");
/**
 * Given an input password a salt and a hash
 * Does the given password match with the hash?
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean}
 */
var validatePassword = function (inputPassword, salt, storedHash) {
    var inputHash = crypto_1.pbkdf2Sync(inputPassword, salt, 1000, 64, "sha512").toString("hex");
    return storedHash === inputHash;
};
exports.validatePassword = validatePassword;
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
var hashPassword = function (password) {
    var salt = crypto_1.randomBytes(16).toString("hex");
    var hash = crypto_1.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    return { hash: hash, salt: salt };
};
exports.hashPassword = hashPassword;
