import { createHash } from "crypto";
import { hash } from "../auth";

describe("hash function", () => {
  it("should hash a text", async () => {
    // arrange
    const text = "hello world";

    // act
    const result = hash(text);

    // assert
    expect(result).toBe(createHash("sha256").update(text).digest("hex"));
  });
});
