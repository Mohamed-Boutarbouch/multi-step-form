const PersonalInfo = () => {
  return (
    <fieldset>
      <legend className="mb-2 text-xl font-bold capitalize text-primary-marine-blue md:text-4xl">
        personal info
      </legend>
      <p className="mb-3 text-neutral-cool-gray md:mb-10">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label htmlFor="name" className="capitalize text-primary-marine-blue">
            name
          </label>
          <p className="hidden font-semibold text-primary-strawberry-red invalid:block">
            This field is required
          </p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          className="mb-4 h-10 rounded-md border border-neutral-cool-gray px-4 placeholder:text-neutral-cool-gray md:mb-6"
        />

        <div className="flex justify-between">
          <label htmlFor="email" className="capitalize text-primary-marine-blue">
            email address
          </label>
          <p className="hidden font-semibold text-primary-strawberry-red invalid:block">
            This field is required
          </p>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lerem.com"
          className="mb-4 h-10 rounded-md border border-neutral-cool-gray px-4 placeholder:text-neutral-cool-gray md:mb-6"
        />

        <div className="flex justify-between">
          <label htmlFor="phone" className="capitalize text-primary-marine-blue">
            phone number
          </label>
          <p className="hidden font-semibold text-primary-strawberry-red invalid:block">
            This field is required
          </p>
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          className="mb-4 h-10 rounded-md border border-neutral-cool-gray px-4 placeholder:text-neutral-cool-gray md:mb-6"
        />
      </div>
    </fieldset>
  );
};

export default PersonalInfo;
