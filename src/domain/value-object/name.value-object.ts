import { ValueObject } from "./base.value-object";

export class Name extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.compute();
  }

  protected validate(): void {
    if (typeof this.value !== "string") {
      throw new Error("Value must be string");
    }

    if (!this.value.trim()) {
      throw new Error(`Name can't be empty`);
    }
  }

  private compute(): void {
    this.value.toUpperCase();
  }
}
