import { ChangeEvent, useState } from 'react';

const MonthYearSubscriptionToggle = () => {
  const [isYearlySub, setIsYearlySub] = useState(false);

  const toggleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setIsYearlySub(checked);
  };

  const activeStyle = (isToggled: boolean) =>
    isToggled ? 'text-primary-marine-blue' : 'text-neutral-cool-gray';

  return (
    <div className="flex h-10 w-full items-center justify-center gap-8 rounded-lg bg-neutral-alabaster">
      <p className={`font-bold capitalize ${activeStyle(!isYearlySub)}`}>monthly</p>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          onChange={toggleHandler}
          checked={isYearlySub}
        />
        <div className="peer h-6 w-11 rounded-full bg-primary-marine-blue after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-light-gray" />
      </label>
      <p className={`font-bold capitalize ${activeStyle(isYearlySub)}`}>yearly</p>
    </div>
  );
};

export default MonthYearSubscriptionToggle;
