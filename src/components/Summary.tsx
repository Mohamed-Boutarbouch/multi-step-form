const Summary = () => {
  return (
    <fieldset>
      <legend className="mb-2 text-xl font-bold text-primary-marine-blue md:text-4xl">
        Finishing up
      </legend>
      <p className="mb-3 text-neutral-cool-gray md:mb-10">
        Double-check everything looks OK before confirming.
      </p>

      <div className="flex flex-col">
        <div>
          <p>arcade (monthly)</p>
          <a href="/">change</a>
          <p>$9/mo</p>
        </div>
        <hr />
        <div>
          <p>online service</p>
          <p>+$1/mo</p>
        </div>
        <div>
          <p>larger storage</p>
          <p>+$2/mo</p>
        </div>
        <div>
          <p>customizable profile</p>
          <p>+$2/mo</p>
        </div>
      </div>

      <div>
        <p>total (per month)</p>
        <p>+$12/mo</p>
      </div>
    </fieldset>
  );
};

export default Summary;
