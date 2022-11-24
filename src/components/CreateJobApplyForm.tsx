import { useMemo, useState } from "react"
import { useForm } from "../hooks/useForm"

const jobApplyFormInitialValues = {
  company: '',
  role: '',
  technology: '',
}

interface CreateJobApplyFormProperties {
  onSubmit: (form: Record<string, unknown>) => void
}

export const CreateJobApplyForm = ({ onSubmit }: CreateJobApplyFormProperties) => {
  const { form, register, errors, setErrors } = useForm(jobApplyFormInitialValues)
  const [technologies, setTechnologies] = useState<string[]>([])
  const roles = ['Full stack', 'Front end', 'Back end', 'Mobile']
  const rolesOption = roles.map(role => <option value={role} key={role}>{role}</option>)
  const hasErrors = useMemo(() => Object.values(errors).some(Boolean), [errors])
  const displayErrors = () =>
    Object.entries(errors)
      .map(([property, errorMessage]) => <p>{property}: {errorMessage}</p>)

  const addTechnology = (event: React.MouseEvent<HTMLButtonElement> & React.KeyboardEvent<HTMLInputElement>) => {
    if (event.type === 'keydown' && event.key !== 'Enter') {
      return
    }
    if (!form.technology) {
      setErrors(errors => ({ ...errors, technology: `Technology name can't be empty` }))
      return
    }
    if (technologies.includes(form.technology)) {
      setErrors(errors => ({ ...errors, technology: 'Already added' }))
      return
    }
    setTechnologies((technologies) => [...technologies, form.technology])
    setErrors(errors => ({ ...errors, technology: '' }))
  }

  return (
    <form className="col-sm-6">
      <div className="row">
        <div className="col my-3">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input id="company" className="form-control" {...register('company')} />
        </div>
        <div className="col my-3">
          <label className="form-label">Role</label>
          <select className="form-select" {...register('role')}>
            {rolesOption}
          </select>
        </div>
      </div>
      <fieldset className="mb-3">
        <label htmlFor="technologies" className="form-label">Technologies</label>
        <div className="input-group mb-3">
          <input id="technologies" placeholder="Inser a technology name" {...register('technology')}
            onKeyDown={addTechnology}
          />
          <button type="button" className="btn btn-secondary" onClick={addTechnology} >Add</button>
        </div>
        <div className="d-flex gap-2">{technologies.map(technology => <span className="badge text-bg-dark" key={technology}>{technology}</span>)}</div>
      </fieldset>
      {hasErrors ? displayErrors() : null}
      <button type="button" className="btn btn-primary" onClick={() => onSubmit(form)}>Save</button>
    </form >


  )
}
