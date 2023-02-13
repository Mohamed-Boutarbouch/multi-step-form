import FormHeaderContainer from './FormHeaderContainer';

const PersonalInfoStep = () => {
  return (
    <FormHeaderContainer>
      <section className="flex flex-col gap-4 md:gap-6">
        <article>
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
            className="h-10 w-full rounded-md border border-neutral-cool-gray px-4 placeholder:text-neutral-cool-gray"
          />
        </article>

        <article>
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
            className="h-10 w-full rounded-md border border-neutral-cool-gray px-4 placeholder:text-neutral-cool-gray"
          />
        </article>

        <article>
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
            className="h-10 w-full rounded-md border border-neutral-cool-gray px-4 placeholder:text-neutral-cool-gray"
          />
        </article>
      </section>
    </FormHeaderContainer>
  );
};

export default PersonalInfoStep;
