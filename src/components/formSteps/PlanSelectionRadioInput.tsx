import { ChangeEvent } from 'react';
import { PlanSelectionRadioProps } from '../dummy-data';

interface RadioStateProps {
  currentPlan: string;
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
}) => {
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
        className="flex w-full cursor-pointer justify-start rounded-lg border border-neutral-light-gray bg-white p-2.5 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia md:h-52 md:p-3 lg:p-5"
      >
        <div className="flex items-start gap-4 md:flex-col md:justify-between">
          <img src={radioIcon} alt={`${radioValue} icon`} />
          <div className="w-full">
            <h3 className="font-bold capitalize text-primary-marine-blue">{radioValue}</h3>
            <p className="text-neutral-cool-gray">${`${monthlySubscription}`}/mo</p>
            {/* <p className="text-neutral-cool-gray">${`${yearlySubscription}`}/yr</p> */}
            {/* <p className="text-sm text-primary-marine-blue">2 month free</p> */}
          </div>
        </div>
      </label>
    </li>
  );
};

export default PlanSelectionRadioInput;
