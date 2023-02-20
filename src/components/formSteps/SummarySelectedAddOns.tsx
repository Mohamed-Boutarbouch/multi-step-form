import { FC } from 'react';

interface SelectedAddOnsProps {
  addOnName: string;
  monthlySub: number;
  yearlySub: number;
  isYearlySub: boolean;
}

const SummarySelectedAddOns: FC<SelectedAddOnsProps> = ({
  addOnName,
  monthlySub,
  yearlySub,
  isYearlySub,
}) => {
  return (
    <div className="mb-2 flex items-center justify-between">
      <p className="text-neutral-cool-gray">{addOnName}</p>
      <p className="text-primary-marine-blue">{`+$${isYearlySub ? yearlySub : monthlySub}/${
        isYearlySub ? 'yr' : 'mo'
      }`}</p>
    </div>
  );
};

export default SummarySelectedAddOns;
