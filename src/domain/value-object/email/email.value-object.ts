import { ValidationError } from "../../error/validation.error";
import { ValueObject } from "../base.value-object";

export class Email extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  protected validate(): void {
    const pattern = /[\w\.\-\_]{1,20}@\w+(\.[\w\-]+){1,3}/gi;
    if (!pattern.test(this.value)) {
      throw new ValidationError("Invalid email", "email");
    }
  }
}
