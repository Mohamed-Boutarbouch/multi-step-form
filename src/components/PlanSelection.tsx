import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';

const PlanSelection = () => {
  return (
    <fieldset>
      <legend className="mb-2 text-xl font-bold capitalize text-primary-marine-blue md:text-4xl">
        select your plan
      </legend>
      <p className="mb-3 text-neutral-cool-gray md:mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="flex flex-col gap-3 md:flex-row">
        <li>
          <input type="radio" id="arcade" name="billing" value="arcade" className="peer hidden" />
          <label
            htmlFor="arcade"
            className="flex w-full cursor-pointer justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia md:h-52 md:w-40"
          >
            <div className="flex items-start gap-4 md:flex-col md:justify-between">
              <img src={arcadeIcon} alt="arcade icon" />
              <div className="w-full">
                <h3 className="font-bold capitalize text-primary-marine-blue">arcade</h3>
                <p className="text-neutral-cool-gray">$9/mo</p>
                <p className="text-sm text-primary-marine-blue">2 month free</p>
              </div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="advanced"
            name="billing"
            value="advanced"
            className="peer hidden"
          />
          <label
            htmlFor="advanced"
            className="flex w-full cursor-pointer justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia md:h-52 md:w-40"
          >
            <div className="flex items-start gap-4 md:flex-col md:justify-between">
              <img src={advancedIcon} alt="advanced icon" />
              <div className="w-full">
                <h3 className="font-bold capitalize text-primary-marine-blue">advanced</h3>
                <p className="text-neutral-cool-gray">$12/mo</p>
                <p className="text-sm text-primary-marine-blue">2 month free</p>
              </div>
            </div>
          </label>
        </li>
        <li>
          <input type="radio" id="pro" name="billing" value="pro" className="peer hidden" />
          <label
            htmlFor="pro"
            className="flex w-full cursor-pointer justify-start rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia md:h-52 md:w-40"
          >
            <div className="flex items-start gap-4 md:flex-col md:justify-between">
              <img src={proIcon} alt="pro icon" />
              <div className="w-full">
                <h3 className="font-bold capitalize text-primary-marine-blue">pro</h3>
                <p className="text-neutral-cool-gray">$12/mo</p>
                <p className="text-sm text-primary-marine-blue">2 month free</p>
              </div>
            </div>
          </label>
        </li>
      </ul>
      <div className="mt-7 flex h-14 w-full items-center justify-center gap-8 rounded-lg bg-neutral-alabaster">
        <p className="font-bold capitalize text-primary-marine-blue">monthly</p>
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-primary-marine-blue after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-light-gray"></div>
        </label>
        <p className="font-bold capitalize text-neutral-cool-gray">yearly</p>
      </div>
    </fieldset>
  );
};

export default PlanSelection;
