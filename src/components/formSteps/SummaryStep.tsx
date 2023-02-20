import useFormContext from '../../hooks/useFormContent';
import FormHeaderContainer from '../FormHeaderContainer';
import SummarySelectedAddOns from './SummarySelectedAddOns';

const SummaryStep = () => {
  const { selectedAddOns, formInputs, selectedBillingPlan } = useFormContext();
  const { yearlySubscription } = formInputs;

  const currentBillingPlan = { ...selectedBillingPlan[0] };

  const {
    radioValue,
    monthlySubscription: monthly,
    yearlySubscription: yearly,
  } = currentBillingPlan;

  const monthYearPlan = (
    <p className="font-bold text-primary-marine-blue">{`+$${
      yearlySubscription ? yearly : monthly
    }/${yearlySubscription ? 'yr' : 'mo'}`}</p>
  );

  return (
    <FormHeaderContainer>
      <div className="mb-4 flex flex-col rounded-lg bg-neutral-alabaster p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold capitalize text-primary-marine-blue">
              {`${radioValue} (${yearlySubscription ? 'yearly' : 'monthly'})`}
            </p>
            <p className="w-fit cursor-pointer capitalize text-neutral-cool-gray underline hover:text-primary-purplish-blue">
              change
            </p>
          </div>
          {monthYearPlan}
        </div>
        {selectedAddOns.length !== 0 && <hr className="my-4" />}
        {selectedAddOns.map((addOn) => {
          return (
            <SummarySelectedAddOns
              key={addOn.id}
              addOnName={addOn.title}
              monthlySub={addOn.monthlySubscriptionAddition}
              yearlySub={addOn.yearlySubscriptionAddition}
              isYearlySub={yearlySubscription}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between p-4">
        <p className="text-neutral-cool-gray">Total (per month)</p>
        <p className="text-xl font-bold text-primary-purplish-blue">+$12/mo</p>
      </div>
    </FormHeaderContainer>
  );
};

export default SummaryStep;
