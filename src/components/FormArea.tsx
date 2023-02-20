import ActionButtons from './ActionButtons';
import PersonalInfoStep from './formSteps/PersonalInfoStep';
import PlanSelectionStep from './formSteps/PlanSelectionStep';
import AddOnsStep from './formSteps/AddOnsStep';
import SummaryStep from './formSteps/SummaryStep';
import useFormContext from '../hooks/useFormContent';
import ThankYou from './ThankYou';

const FormArea = () => {
  const { currentStep, submitHandler, formSubmitted: isFormSubmitted } = useFormContext();

  const activeStep = [<PersonalInfoStep />, <PlanSelectionStep />, <AddOnsStep />, <SummaryStep />];

  return (
    <>
      {isFormSubmitted ? (
        <ThankYou />
      ) : (
        <form
          className="flex w-full justify-center md:mx-auto md:max-w-[500px] md:flex-col md:justify-between md:py-8"
          onSubmit={submitHandler}
        >
          {activeStep[currentStep]}
          <ActionButtons />
        </form>
      )}
    </>
  );
};

export default FormArea;
