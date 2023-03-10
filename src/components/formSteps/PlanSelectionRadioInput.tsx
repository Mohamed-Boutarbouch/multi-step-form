import { ChangeEvent } from 'react';
import { PlanSelectionRadioProps } from '../dummy-data';

interface RadioStateProps {
  currentPlan: string;
  isYearlyPlan: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

type RadioProps = PlanSelectionRadioProps & RadioStateProps;

const PlanSelectionRadioInput: React.FC<RadioProps> = ({
  radioValue,
  radioIcon,
  monthlySubscription,
  yearlySubscription,
  onChange,
  currentPlan,
  isYearlyPlan,
  id,
}) => {
  const monthYearPlan = (
    <>
      {isYearlyPlan ? (
        <>
          <p className="text-neutral-cool-gray">${`${yearlySubscription}`}/$yr</p>
          <p className="text-sm text-primary-marine-blue">2 month free</p>
        </>
      ) : (
        <p className="text-neutral-cool-gray">${`${monthlySubscription}`}/mo</p>
      )}
    </>
  );

  return (
    <li>
      <input
        type="radio"
        id={radioValue}
        name="billingPlan"
        value={radioValue}
        className="peer hidden"
        checked={currentPlan === radioValue}
        onChange={onChange}
      />
      <label
        htmlFor={radioValue}
        className="flex w-full cursor-pointer justify-start rounded-lg border border-neutral-light-gray bg-white p-2.5 transition-all 
        hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia
        peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-strawberry-red md:h-52 md:p-3 lg:p-5"
        tabIndex={id}
      >
        <div className="flex items-start gap-4 md:flex-col md:justify-between">
          <img src={radioIcon} alt={`${radioValue} icon`} />
          <div className="w-full">
            <h3 className="font-bold capitalize text-primary-marine-blue">{radioValue}</h3>
            {monthYearPlan}
          </div>
        </div>
      </label>
    </li>
  );
};

export default PlanSelectionRadioInput;
