import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface FormRegister {
  name: string;
  value?: string | number;
  onChange: ChangeEventHandler;
}

type FormProperties = Record<string, string | number | undefined>;

export const useForm = <Type extends FormProperties = FormProperties>(
  initialValues: Type
) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const control = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const register = (name: string): FormRegister => {
    return { name, value: form[name], onChange: control };
  };

  const clear = () => setForm(initialValues);

  return { form, register, errors, setErrors, clear };
};
