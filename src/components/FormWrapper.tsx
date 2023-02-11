import PersonalInfo from './PersonalInfo';

const FormWrapper = () => {
  return (
    <section className="flex flex-col">
      <h1 className="capitalize">personal info</h1>
      <p>please provide your name, email address, and phone number.</p>
      <form>
        <PersonalInfo />
      </form>
      <button
        type="button"
        className="shrink-0 bg-primary-strawberry-red p-2 capitalize text-neutral-white"
      >
        next step
      </button>
    </section>
  );
};

export default FormWrapper;
