export abstract class Entity {
  abstract id: string;
  protected abstract validate(): void;
}
