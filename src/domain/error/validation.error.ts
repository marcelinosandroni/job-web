export class ValidationError extends Error {
  constructor(message: string, public propertyName: string) {
    super(message);
  }
}
