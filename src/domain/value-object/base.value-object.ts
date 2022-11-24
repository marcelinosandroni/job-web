export abstract class ValueObject<Type> {
  constructor(public readonly value: Type) {
    this.validate();
  }

  protected abstract validate(): void;
}
