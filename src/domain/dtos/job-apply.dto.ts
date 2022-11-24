import { JobType } from "../entities/job-apply/JobType.enum";

export class JobApplyDto {
  id: string;
  company: string;
  role: string;
  technologies: string[];
  type: JobType;
  date: Date;
  link: string;
  status: string;
  lastUpdate: Date;
}
