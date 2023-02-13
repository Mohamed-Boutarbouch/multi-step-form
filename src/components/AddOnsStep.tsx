import FormHeaderContainer from './FormHeaderContainer';

const AddOnsStep = () => {
  return (
    <FormHeaderContainer>
      <section>
        <ul className="flex flex-col gap-4">
          <li className="relative">
            <input
              type="checkbox"
              id="online-service"
              name="online-service"
              value="online-service"
              className="peer absolute top-[35%] left-[22px] h-6 w-6 accent-primary-purplish-blue"
            />
            <label
              htmlFor="online-service"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
            >
              <div className="flex items-center justify-between gap-5">
                <button type="button" className="pointer-events-none h-6 w-6"></button>
                <div>
                  <p className="font-bold text-primary-marine-blue">Online services</p>
                  <p className="text-sm text-neutral-cool-gray">Access to multiplayer games</p>
                </div>
              </div>
              <p className="text-primary-purplish-blue">+$1/mo</p>
            </label>
          </li>
          <li className="relative">
            <input
              type="checkbox"
              id="larger-storage"
              name="larger-storage"
              value="larger-storage"
              className="peer absolute top-[35%] left-[22px] h-6 w-6 accent-primary-purplish-blue"
            />
            <label
              htmlFor="larger-storage"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
            >
              <div className="flex items-center justify-between gap-5">
                <button type="button" className="pointer-events-none h-6 w-6"></button>
                <div>
                  <p className="font-bold text-primary-marine-blue">Large storage</p>
                  <p className="text-sm text-neutral-cool-gray">Extra 1TB of cloud save</p>
                </div>
              </div>
              <p className="text-primary-purplish-blue">+$2/mo</p>
            </label>
          </li>
          <li className="relative">
            <input
              type="checkbox"
              id="customizable-profile"
              name="customizable-profile"
              value="customizable-profile"
              className="peer absolute top-[35%] left-[22px] h-6 w-6 accent-primary-purplish-blue"
            />
            <label
              htmlFor="customizable-profile"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-light-gray bg-white px-5 py-4 hover:border-primary-purplish-blue peer-checked:border-primary-purplish-blue peer-checked:bg-neutral-magnolia"
            >
              <div className="flex items-center justify-between gap-5">
                <button type="button" className="pointer-events-none h-6 w-6"></button>
                <div>
                  <p className="font-bold text-primary-marine-blue">Customizable profile</p>
                  <p className="text-sm text-neutral-cool-gray">Custom theme on your profile</p>
                </div>
              </div>
              <p className="text-primary-purplish-blue">+$2/mo</p>
            </label>
          </li>
        </ul>
      </section>
    </FormHeaderContainer>
  );
};

export default AddOnsStep;
