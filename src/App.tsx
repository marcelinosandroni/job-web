import { useState, ChangeEvent } from "react"
import { JobApplyCard } from "./components/JobApplyCard"
import { JobApply } from "./domain/entities/job-apply.entity"

function App() {
  const [counter, setCounter] = useState(0)
  const [jobApplies, setJobApplies] = useState<JobApply[]>([])

  const save = (form: ): void => {
    if (!title) {
      setError(`Title can't be empty`)
      return
    }
    if (hasJobTitle(title)) {
      setError(`Title already exist`)
      return
    }
    const jobApply = new JobApply(title, role, technologies, new Date(), 'http', 'applied')
    setJobApplies((jobApplies) => [...jobApplies, jobApply])
    setCounter((counter) => ++counter)
    clear()
  }

  const clear = (): void => {
    setTitle('')
    setTechnology('')
    setRole('')
    setError('')

  }

  const hasJobTitle = (title: string) => jobApplies.some(jobApply => jobApply.title === title)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    if (!value) {
      return
    }
    setTitle(value)
  }

  const handleTechnologyChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    if (!value) {
      return
    }
    setTechnology(value)
  }


  return (
    <div className="app container pt-5">


    </div >
  )
}

export default App
