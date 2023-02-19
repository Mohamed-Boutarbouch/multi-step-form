import useFormContext from '../hooks/useFormContent';
import { formHeaderData } from './dummy-data';

interface FormHeaderContainerProps {
  children: React.ReactNode;
}

const FormHeaderContainer: React.FC<FormHeaderContainerProps> = ({ children }) => {
  const { steps: currentStep } = useFormContext();

  return (
    <fieldset className="flex h-full w-11/12 flex-col justify-between gap-6 md:block md:w-full">
      <legend className="mb-1 text-2xl font-bold text-primary-marine-blue md:mb-2 md:text-3xl">
        {formHeaderData[currentStep].legend}
      </legend>
      <p className="mb-1.5 text-neutral-cool-gray md:mb-10">
        {formHeaderData[currentStep].details}
      </p>
      {children}
    </fieldset>
  );
};

export default FormHeaderContainer;
