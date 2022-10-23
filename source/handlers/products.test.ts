describe("listProducts request handler", () => {
  it.todo("should write an array in the response body");
});

describe("readProduct request handler", () => {
  it.todo("should send one record in response body");
  it.todo("should send an error if the requested record was not found");
});

describe("createProduct request handler", () => {
  it.todo("should send the created record in the response body");
  it.todo("should send an error if cannot create the requested record");
});

describe("updateProduct request handler", () => {
  it.todo("should send the updated record in the response body");
  it.todo("should send an error if cannot update the requested record");
});

describe("deleteProduct request handler", () => {
  it.todo(
    "should send status code 204 if it was able to delete the requested record"
  );
  it.todo("should send an 404 error if the requested method was not found");
});
