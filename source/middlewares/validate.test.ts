import validate from "./validate";
import { categorySchema } from "../schemas/category";

describe("validate middleware", () => {
  it("should return a defined middleware function", () => {
    // arrange

    // act
    const middlewareFn = validate(categorySchema.create);

    // assert
    expect(middlewareFn).toBeDefined();
    expect(middlewareFn).toBeInstanceOf(Function);
  });
});
