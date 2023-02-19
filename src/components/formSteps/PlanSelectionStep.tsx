import FormHeaderContainer from '../FormHeaderContainer';
import PlanSelectionRadioInput from './PlanSelectionRadioInput';
import { planSelectionRadioData } from '../dummy-data';
import MonthYearSubscriptionToggle from './MonthYearSubscriptionToggle';
import useFormContext from '../../hooks/useFormContent';

const PlanSelectionStep = () => {
  const { formInputs, changeHandler } = useFormContext();

  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        <ul className="flex flex-col gap-3 md:grid md:grid-cols-3">
          {planSelectionRadioData.map((radioInput) => {
            return (
              <PlanSelectionRadioInput
                key={radioInput.id}
                {...radioInput}
                isYearlyPlan={formInputs.yearlySubscription}
                currentPlan={formInputs.billingPlan}
                onChange={changeHandler}
              />
            );
          })}
        </ul>
        <MonthYearSubscriptionToggle />
      </section>
    </FormHeaderContainer>
  );
};

export default PlanSelectionStep;
