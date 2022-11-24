import { Email } from "../../value-object/email/email.value-object";
import { Name } from "../../value-object/name.value-object";
import { User } from "./user.entity";

describe("User", () => {
  it("should create a valid user", () => {
    const name = new Name("any_name");
    const email = new Email("any_valid_email@mail.com");
    const user = new User("1", name, email);
    expect(user).toBeTruthy();
  });

  it("should throw error if id is empty", () => {
    const createUser = () => {
      const name = new Name("valid_name");
      const email = new Email("valid_mail@mail.com");
      new User("", name, email);
    };
    expect(createUser).toThrowError("invalid id");
  });

  it("should throw error if name is empty", () => {
    const createUser = () => {
      const name = new Name("");
      const email = new Email("any_invalid_email");
      new User("1", name, email);
    };
    expect(createUser).toThrowError(`string can't be empty`);
  });

  it("should throw error if email is invalid", () => {
    const createUser = () => {
      const name = new Name("any_name");
      const email = new Email("any_invalid_email");
      new User("1", name, email);
    };
    expect(createUser).toThrowError("Invalid email");
  });
});
