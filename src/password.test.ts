import { hashPassword } from "./index";
import { validatePassword } from "./password";

const PASSWORD = "1234";

const VALUES = {
  hash:
    "dc1dc8c12e0959c02d735a8db818a55b358847269c6b9c918912a4f3518376694c6f41f2dd4a49045e39391c0ef580a1ccd0f328ebe6e22e7eb37531e83d3929",
  salt: "ef84f8adb4eadf514b1405784e08847e",
  password: "1234",
  wrongPassword: "asdf",
};

describe("hashPassword", () => {
  test("hashPassword returns an object with hash", () => {
    const results = hashPassword(PASSWORD);

    expect(results).toHaveProperty("hash");
  });

  test("hashPassword returns an object with salt ", () => {
    const results = hashPassword(PASSWORD);

    expect(results).toHaveProperty("salt");
  });
});

describe("validatePassword", () => {
  test("with correct password ", () => {
    expect(validatePassword(VALUES.password, VALUES.salt, VALUES.hash)).toBe(
      true
    );
  });

  test("with wrong password ", () => {
    expect(
      validatePassword(VALUES.wrongPassword, VALUES.salt, VALUES.hash)
    ).toBe(false);
  });
});
