import { PlanSelectionRadioProps } from '../dummy-data';

const PlanSelectionRadioInput: React.FC<PlanSelectionRadioProps> = ({
  radioName,
  radioIcon,
  monthlySubscription,
  yearlySubscription,
}) => {
  return (
    <li>
      <input type="radio" id={radioName} name="billing" value={radioName} className="peer hidden" />
      <label
        htmlFor={radioName}
        className="flex w-full cursor-pointer justify-start rounded-lg border border-neutral-light-gray bg-white p-2.5 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia md:h-52 md:p-3 lg:p-5"
      >
        <div className="flex items-start gap-4 md:flex-col md:justify-between">
          <img src={radioIcon} alt={`${radioName} icon`} />
          <div className="w-full">
            <h3 className="font-bold capitalize text-primary-marine-blue">{radioName}</h3>
            <p className="text-neutral-cool-gray">${`${monthlySubscription}`}/mo</p>
            <p className="text-neutral-cool-gray">${`${yearlySubscription}`}/yr</p>
            <p className="text-sm text-primary-marine-blue">2 month free</p>
          </div>
        </div>
      </label>
    </li>
  );
};

export default PlanSelectionRadioInput;
