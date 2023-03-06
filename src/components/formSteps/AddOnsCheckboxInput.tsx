import { ChangeEvent } from 'react';
import { AddOnsCheckboxProps } from '../dummy-data';

interface CheckboxStateProps {
  isChecked: boolean;
  isYearlyPlan: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

type CheckboxProps = AddOnsCheckboxProps & CheckboxStateProps;

const AddOnsCheckboxInput: React.FC<CheckboxProps> = ({
  checkboxName,
  details,
  monthlySubscriptionAddition: perMonth,
  yearlySubscriptionAddition: perYear,
  title,
  onChange,
  isChecked,
  isYearlyPlan,
  id,
}) => {
  const monthYearPlan = (
    <p className="text-primary-purplish-blue">{`+$${isYearlyPlan ? perYear : perMonth}/${
      isYearlyPlan ? 'yr' : 'mo'
    }`}</p>
  );

  return (
    <li className="relative">
      <input
        type="checkbox"
        id={checkboxName}
        name={checkboxName}
        value={title}
        className="peer pointer-events-none absolute top-[35%] left-[22px] h-6 w-6 accent-primary-purplish-blue"
        onChange={onChange}
        checked={isChecked}
        tabIndex={-1}
      />
      <label
        htmlFor={checkboxName}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 transition-colors hover:border-primary-purplish-blue focus:border-primary-purplish-blue
        focus:bg-neutral-magnolia peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
        tabIndex={id}
      >
        <div className="flex items-center justify-between gap-5">
          <button
            type="button"
            tabIndex={-1}
            className="pointer-events-none h-6 w-6 outline-none"
          ></button>
          <div>
            <p className="font-bold text-primary-marine-blue">{title}</p>
            <p className="text-sm text-neutral-cool-gray">{details}</p>
          </div>
        </div>
        {monthYearPlan}
      </label>
    </li>
  );
};

export default AddOnsCheckboxInput;
