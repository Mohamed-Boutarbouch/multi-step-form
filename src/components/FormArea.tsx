import ActionButtons from './ActionButtons';
import PersonalInfoStep from './formSteps/PersonalInfoStep';
import PlanSelectionStep from './formSteps/PlanSelectionStep';
import AddOnsStep from './formSteps/AddOnsStep';
import SummaryStep from './formSteps/SummaryStep';
import useFormContext from '../hooks/useFormContent';

const FormArea = () => {
  const { currentStep } = useFormContext();

  const activeStep = [<PersonalInfoStep />, <PlanSelectionStep />, <AddOnsStep />, <SummaryStep />];

  return (
    <form className="flex w-full justify-center md:mx-auto md:max-w-[500px] md:flex-col md:justify-between md:py-8">
      {activeStep[currentStep]}
      <ActionButtons />
    </form>
  );
};

export default FormArea;
