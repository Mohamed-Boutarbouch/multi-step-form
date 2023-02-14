import { AddOnsCheckboxProps } from '../dummy-data';

const AddOnsCheckboxInput: React.FC<AddOnsCheckboxProps> = ({
  inputName,
  details,
  title,
  monthlySubscriptionAddition: perMonth,
  yearlySubscriptionAddition: perYear,
}) => {
  return (
    <li className="relative">
      <input
        type="checkbox"
        id={inputName}
        name={inputName}
        value={title}
        className="peer absolute top-[35%] left-[22px] h-6 w-6 accent-primary-purplish-blue"
      />
      <label
        htmlFor={inputName}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
      >
        <div className="flex items-center justify-between gap-5">
          <button type="button" className="pointer-events-none h-6 w-6"></button>
          <div>
            <p className="font-bold text-primary-marine-blue">{title}</p>
            <p className="text-sm text-neutral-cool-gray">{details}</p>
          </div>
        </div>
        <p className="text-primary-purplish-blue">+${`${perMonth}`}/mo</p>
      </label>
    </li>
  );
};

export default AddOnsCheckboxInput;
