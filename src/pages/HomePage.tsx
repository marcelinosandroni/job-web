import { ChangeEvent, useState } from "react"
import { JobApplyCard } from "../components/JobApplyCard"
import { JobApply } from "../domain/entities/job-apply/job-apply.entity"
import { JobType } from "../domain/entities/job-apply/JobType.enum"
import { JobApplyFactory } from "../domain/factories/job-apply.factory"

export const HomePage = () => {
  const [counter, setCounter] = useState(0)
  const [jobApplies, setJobApplies] = useState<JobApply[]>([])
  const [company, setCompany] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [technology, setTechnology] = useState<string>('')
  const [technologies, setTechnologies] = useState<string[]>([])
  const [error, setError] = useState<string>('')
  const roles = ['Full stack', 'Front end', 'Back end', 'Mobile']

  const save = (): void => {
    if (!company) {
      setError(`Company can't be empty`)
      return
    }
    if (hasJobCompany(company)) {
      setError(`Company already exist`)
      return
    }
    const jobApply = JobApplyFactory.create({ id: '1', company: company, role, technologies, type: JobType.REMOTE, status: '', date: new Date(), link: 'http', lastUpdate: new Date() })
    setJobApplies((jobApplies) => [...jobApplies, jobApply])
    setCounter((counter) => ++counter)
    clear()
  }

  const clear = (): void => {
    setCompany('')
    setTechnology('')
    setRole('')
    setError('')

  }

  const hasJobCompany = (company: string) => jobApplies.some(jobApply => jobApply.company === company)

  const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    if (!value) {
      return
    }
    setCompany(value)
  }

  const handleTechnologyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    if (!value) {
      return
    }
    setTechnology(value)
  }

  const addTechnology = (event: React.MouseEvent<HTMLButtonElement> & React.KeyboardEvent<HTMLInputElement>) => {
    if (event.type === 'keydown' && event.key !== 'Enter') {
      return
    }
    if (!technology) {
      setError(`Technology name can't be empty`)
      return
    }
    if (technologies.includes(technology)) {
      setError('Already added')
      return
    }
    setError('')
    setTechnologies((technologies) => [...technologies, technology])
    setTechnology('')
  }

  return (
    <main>
      <p>Current applies: {counter}</p>


      <div className="card-container d-flex gap-4 flex-wrap mt-5">
        {jobApplies.map(jobApply => <JobApplyCard jobApply={jobApply} key={jobApply.company} />)}
      </div>
    </main >
  )

}
