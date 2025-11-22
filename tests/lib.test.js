const lib = require("../lib");

describe("absolute", () => {
  it("absolute - should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("absolute - should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("absolute - should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Tushar");
    // expect(result).toMatch(/Tushar/);
    // expect(result).toContain("Tushar");
  });
});

describe("getCurrencies", () => {
  it("must return supported currencies", () => {
    const result = lib.getCurrencies();

    // Too generic
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Very Specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");

    // Ideal Test
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("regsiterUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("mosh");
    expect(result).toMatchObject({ username: "mosh" });
    expect(result.id).toBeGreaterThan(0);
  });
});
