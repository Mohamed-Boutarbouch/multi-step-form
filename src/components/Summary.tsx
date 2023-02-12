const Summary = () => {
  return (
    <fieldset>
      <legend className="mb-2 text-xl font-bold text-primary-marine-blue md:text-4xl">
        Finishing up
      </legend>
      <p className="mb-3 text-neutral-cool-gray md:mb-10">
        Double-check everything looks OK before confirming.
      </p>

      <div className="mb-4 flex flex-col rounded-lg bg-neutral-alabaster p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold capitalize text-primary-marine-blue">arcade (monthly)</p>
            <a
              href="/"
              className="capitalize text-neutral-cool-gray underline hover:text-primary-purplish-blue"
            >
              change
            </a>
          </div>
          <p className="font-bold text-primary-marine-blue">$9/mo</p>
        </div>
        <hr className="my-4" />
        <div className="mb-2 flex items-center justify-between">
          <p className="text-neutral-cool-gray">Online service</p>
          <p className="text-primary-marine-blue">+$1/mo</p>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-neutral-cool-gray">Larger storage</p>
          <p className="text-primary-marine-blue">+$2/mo</p>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-neutral-cool-gray">Customizable profile</p>
          <p className="text-primary-marine-blue">+$2/mo</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <p className="text-neutral-cool-gray">Total (per month)</p>
        <p className="text-xl font-bold text-primary-purplish-blue">+$12/mo</p>
      </div>
    </fieldset>
  );
};

export default Summary;
