import useFormContext from '../../hooks/useFormContent';

const MonthYearSubscriptionToggle = () => {
  const { formInputs, changeHandler } = useFormContext();

  const { yearlySubscription: isYearlySub } = formInputs;

  const activeStyle = (isToggled: boolean): string =>
    isToggled ? 'text-primary-marine-blue' : 'text-neutral-cool-gray';

  return (
    <div className="flex h-10 w-full items-center justify-center gap-8 rounded-lg bg-neutral-alabaster">
      <p className={`font-bold capitalize transition-colors ${activeStyle(!isYearlySub)}`}>
        monthly
      </p>
      <label
        htmlFor="yearlySubscription"
        className="relative inline-flex cursor-pointer items-center"
      >
        <input
          name="yearlySubscription"
          id="yearlySubscription"
          type="checkbox"
          className="peer sr-only"
          onChange={changeHandler}
          checked={isYearlySub}
        />
        <div className="peer h-6 w-11 rounded-full bg-primary-marine-blue after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring peer-focus:ring-black" />
      </label>
      <p className={`font-bold capitalize transition-colors ${activeStyle(isYearlySub)}`}>yearly</p>
    </div>
  );
};

export default MonthYearSubscriptionToggle;
