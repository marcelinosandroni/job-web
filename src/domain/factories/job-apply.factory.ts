import { JobApplyDto } from "../dtos/job-apply.dto";
import { JobApply } from "../entities/job-apply/job-apply.entity";

export class JobApplyFactory {
  static create({
    id,
    company,
    role,
    technologies,
    type,
    date,
    link,
    status,
    lastUpdate,
  }: JobApplyDto): JobApply {
    const name = new Name(company);
    return new JobApply(
      id,
      name,
      role,
      technologies,
      type,
      date,
      link,
      status,
      lastUpdate
    );
  }
}
