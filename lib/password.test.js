"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var password_1 = require("./password");
var PASSWORD = "1234";
var VALUES = {
    hash: "dc1dc8c12e0959c02d735a8db818a55b358847269c6b9c918912a4f3518376694c6f41f2dd4a49045e39391c0ef580a1ccd0f328ebe6e22e7eb37531e83d3929",
    salt: "ef84f8adb4eadf514b1405784e08847e",
    password: "1234",
    wrongPassword: "asdf",
};
describe("hashPassword", function () {
    test("hashPassword returns an object with hash", function () {
        var results = index_1.hashPassword(PASSWORD);
        expect(results).toHaveProperty("hash");
    });
    test("hashPassword returns an object with salt ", function () {
        var results = index_1.hashPassword(PASSWORD);
        expect(results).toHaveProperty("salt");
    });
});
describe("validatePassword", function () {
    test("with correct password ", function () {
        expect(password_1.validatePassword(VALUES.password, VALUES.salt, VALUES.hash)).toBe(true);
    });
    test("with wrong password ", function () {
        expect(password_1.validatePassword(VALUES.wrongPassword, VALUES.salt, VALUES.hash)).toBe(false);
    });
});
