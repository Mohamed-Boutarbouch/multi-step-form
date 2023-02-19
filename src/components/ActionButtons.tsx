import useFormContext from '../hooks/useFormContent';

const ActionButtons = () => {
  const { nextStep, prevStep } = useFormContext();
  return (
    <section className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-between bg-neutral-white px-4 md:static md:h-16 md:px-0">
      <button
        type="button"
        className="h-12 w-28 bg-transparent font-semibold capitalize text-neutral-cool-gray hover:text-primary-marine-blue"
        onClick={prevStep}
      >
        go back
      </button>
      <button
        type="button"
        className="h-12 w-28 rounded-md bg-primary-marine-blue font-semibold capitalize text-neutral-white hover:opacity-80"
        onClick={nextStep}
      >
        next step
      </button>
    </section>
  );
};

export default ActionButtons;
