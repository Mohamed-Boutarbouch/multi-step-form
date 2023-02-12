import checkmarkIcon from '../assets/icon-checkmark.svg';

const AddOns = () => {
  return (
    <fieldset>
      <legend className="mb-2 text-xl font-bold text-primary-marine-blue md:text-4xl">
        Pick your add-ons
      </legend>
      <p className="mb-3 text-neutral-cool-gray md:mb-10">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="flex flex-col gap-4">
        <li>
          <input
            type="checkbox"
            id="online-service"
            name="online-service"
            value="online-service"
            className="peer hidden"
          />
          <label
            htmlFor="online-service"
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
          >
            <div className="flex items-center justify-between gap-5">
              {/* Checkbox */}
              <button
                type="button"
                className="align-text-center pointer-events-none h-6 w-6 rounded-md border border-neutral-light-gray bg-primary-purplish-blue pl-[5px]"
              >
                <img src={checkmarkIcon} alt="checkmark icon" className="select-none" />
              </button>
              {/* Checkbox */}
              <div>
                <p className="font-bold text-primary-marine-blue">Online services</p>
                <p className="text-sm text-neutral-cool-gray">Access to multiplayer games</p>
              </div>
            </div>
            <p className="text-primary-purplish-blue">+$1/mo</p>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="larger-storage"
            name="larger-storage"
            value="larger-storage"
            className="peer hidden"
          />
          <label
            htmlFor="larger-storage"
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
          >
            <div className="flex items-center justify-between gap-5">
              {/* Checkbox */}
              <button
                type="button"
                className="align-text-center pointer-events-none h-6 w-6 rounded-md border border-neutral-light-gray bg-primary-purplish-blue pl-[5px]"
              >
                <img src={checkmarkIcon} alt="checkmark icon" className="select-none" />
              </button>
              {/* Checkbox */}
              <div>
                <p className="font-bold text-primary-marine-blue">Large storage</p>
                <p className="text-sm text-neutral-cool-gray">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-primary-purplish-blue">+$2/mo</p>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="customizable-profile"
            name="customizable-profile"
            value="customizable-profile"
            className="peer hidden"
          />
          <label
            htmlFor="customizable-profile"
            className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
          >
            <div className="flex items-center justify-between gap-5">
              {/* Checkbox */}
              <button
                type="button"
                className="align-text-center pointer-events-none h-6 w-6 rounded-md border border-neutral-light-gray pl-[5px]"
              >
                {/* <img src={checkmarkIcon} alt="checkmark icon" className="select-none" /> */}
              </button>
              {/* Checkbox */}
              <div>
                <p className="font-bold text-primary-marine-blue">Customizable profile</p>
                <p className="text-sm text-neutral-cool-gray">Custom theme on your profile</p>
              </div>
            </div>
            <p className="text-primary-purplish-blue">+$2/mo</p>
          </label>
        </li>
      </ul>
    </fieldset>
  );
};

export default AddOns;
