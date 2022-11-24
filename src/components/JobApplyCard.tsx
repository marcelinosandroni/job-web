import { JobApply } from "../domain/entities/job-apply/job-apply.entity"

interface JobApplyCardProperties {
  jobApply: JobApply
}

export const JobApplyCard = ({ jobApply }: JobApplyCardProperties) => {
  return (
    <div className="card text-capitalize">
      <div className="card-body">
        <h5 className="card-title">{jobApply.company}</h5>
        <p>{jobApply.role}</p>
        <p>{jobApply.type}</p>
        <ul className="list-group">
          {jobApply.technologies.map(technology =>
            <li className="list-group-item" key={technology}>{technology}</li>
          )}
        </ul>
        <p>{jobApply.date.toLocaleString()}</p>
        <a>{jobApply.link}</a>
        <p>{jobApply.status}</p>
        <button className="btn btn-primary">Details</button>
      </div>
    </div>
  )
}
