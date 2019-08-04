const assert = require("assert");
const nameInString = require("../index");

describe("nameInString()", () => {
    it("Should work", () => {
        assert.equal(nameInString("Across the rivers", "chris"), true);
        assert.equal(nameInString("Under the sea", "chris"), false);
        assert.equal(nameInString("A live son", "Allison"), false);
    });

    it("Should return false for empty input", () => {
        assert.equal(nameInString("", ""), false);
    });
});