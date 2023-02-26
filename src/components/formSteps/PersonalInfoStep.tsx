import { personalInfoInputData } from '../dummy-data';
import FormHeaderContainer from '../FormHeaderContainer';
import PersonalInfoUserInput from './PersonalInfoUserInput';
import useFormContext from '../../hooks/useFormContent';

interface TextInputProps {
  username: string;
  email: string;
  phone: string;
}

const PersonalInfoStep = () => {
  const { formInputs, changeHandler } = useFormContext();

  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        {personalInfoInputData.map((inputData) => {
          return (
            <PersonalInfoUserInput
              key={inputData.id}
              {...inputData}
              value={formInputs[inputData.inputName as keyof TextInputProps]}
              onChange={changeHandler}
              validate={inputData.validate}
            />
          );
        })}
      </section>
    </FormHeaderContainer>
  );
};

export default PersonalInfoStep;
