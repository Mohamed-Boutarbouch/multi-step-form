import { personalInfoInputData } from '../dummy-data';
import FormHeaderContainer from '../FormHeaderContainer';
import PersonalInfoUserInput from './PersonalInfoUserInput';

const PersonalInfoStep = () => {
  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        {personalInfoInputData.map((inputData) => {
          return <PersonalInfoUserInput key={inputData.id} {...inputData} />;
        })}
      </section>
    </FormHeaderContainer>
  );
};

export default PersonalInfoStep;
