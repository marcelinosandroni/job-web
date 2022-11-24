import { Entity } from "../../base.entity";
import { ValidationError } from "../../error/validation.error";
import { Email } from "../../value-object/email/email.value-object";
import { Name } from "../../value-object/name.value-object";

export class User extends Entity {
  constructor(public id: string, public name: Name, public email: Email) {
    super();
  }

  protected validate(): void {
    if (!this.id) {
      throw new ValidationError("value is required", "id");
    }
  }
}
