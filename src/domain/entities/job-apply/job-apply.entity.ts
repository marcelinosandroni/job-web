import { Entity } from "../../base.entity";
import { Name } from "../../value-object/name.value-object";
import { JobType } from "./JobType.enum";

export class JobApply extends Entity {
  get technologies(): string[] {
    return this._technologies;
  }

  constructor(
    public readonly id: string,
    public company: Name,
    public role: string,
    private _technologies: string[],
    public type: JobType,
    public date: Date,
    public link: string,
    public status: string,
    public readonly lastUpdate: Date
  ) {
    super();
  }

  protected validate(): void {
    // if (!this.company) {
    //   throw new Error("Company is required");
    // }
  }

  addTechnology(technology: string): this {
    if (this._technologies.includes(technology)) {
      throw new Error("Technology already exist");
    }
    this._technologies.push(technology);
    return this;
  }

  removeTechnology(technology: string): this {
    const existingTechnologyIndex = this._technologies.findIndex(
      (existingTechnology) => existingTechnology === technology
    );
    const hasTechnology = existingTechnologyIndex !== -1;
    if (!hasTechnology) {
      throw new Error(`Technolog don't exist`);
    }
    this._technologies.splice(existingTechnologyIndex, 1);
    return this;
  }
}
