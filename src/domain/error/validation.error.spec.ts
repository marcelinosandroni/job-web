import { ValidationError } from "./validation.error";

describe("ValidationError", () => {
  it("should create a valida validation error", () => {
    const error = new ValidationError("any_message", "any_property_name");
    expect(error).toBeTruthy();
  });

  it("should have message", () => {
    const error = new ValidationError("any_message", "any_property_name");
    expect(error.message).toBe("any_message");
  });

  it("should have propertyName", () => {
    const error = new ValidationError("any_message", "any_property_name");
    expect(error.propertyName).toBe("any_property_name");
  });
});
