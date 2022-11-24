import { ValidationError } from "./validation.error";

export class NotificationError extends Error {
  errors: ValidationError[] = [];

  constructor(name: string) {
    super(name);
  }

  add(message: string, propertyName: string): this {
    const error = new ValidationError(message, propertyName);
    this.errors.push(error);
    return this;
  }

  publish(): void {
    throw { message: this.message, errors: this.errors };
  }
}
