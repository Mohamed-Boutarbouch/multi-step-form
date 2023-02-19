import FormHeaderContainer from '../FormHeaderContainer';
import PlanSelectionRadioInput from './PlanSelectionRadioInput';
import { planSelectionRadioData } from '../dummy-data';
import MonthYearSubscriptionToggle from './MonthYearSubscriptionToggle';
import { ChangeEvent, useState } from 'react';

interface RadioFormProps {
  billingPlan: string;
}

const initState = {
  billingPlan: 'arcade',
};

const PlanSelectionStep = () => {
  const [radioFormValues, setRadioFormValues] = useState<RadioFormProps>(initState);

  const radioChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setRadioFormValues({ ...radioFormValues, [name]: value });
  };

  console.log(radioFormValues);

  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        <ul className="flex flex-col gap-3 md:grid md:grid-cols-3">
          {planSelectionRadioData.map((radioInput) => {
            return (
              <PlanSelectionRadioInput
                key={radioInput.id}
                {...radioInput}
                currentPlan={radioFormValues.billingPlan}
                onChange={radioChangeHandler}
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
