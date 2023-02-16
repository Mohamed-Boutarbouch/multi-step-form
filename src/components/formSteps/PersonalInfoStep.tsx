import { ChangeEvent, useState } from 'react';
import { personalInfoInputData } from '../dummy-data';
import FormHeaderContainer from '../FormHeaderContainer';
import PersonalInfoUserInput from './PersonalInfoUserInput';

interface InputFormProps {
  username: string;
  email: string;
  phone: string;
}

const initState = {
  username: '',
  email: '',
  phone: '',
};

const PersonalInfoStep = () => {
  const [inputFormValues, setInputFormValues] = useState<InputFormProps>(initState);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputFormValues({ ...inputFormValues, [name]: value });
  };

  console.log(inputFormValues);

  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        {personalInfoInputData.map((inputData) => {
          return (
            <PersonalInfoUserInput
              key={inputData.id}
              {...inputData}
              value={inputFormValues[inputData.inputName as keyof InputFormProps]}
              onChange={inputChangeHandler}
            />
          );
        })}
      </section>
    </FormHeaderContainer>
  );
};

export default PersonalInfoStep;
