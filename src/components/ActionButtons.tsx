import useFormContext from '../hooks/useFormContent';

const ActionButtons = () => {
  const { nextStep, prevStep, isFirstStep, isLastStep, confirmSubmissionHandler } =
    useFormContext();
  return (
    <section className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-between bg-neutral-white px-4 md:static md:h-16 md:px-0">
      <button
        type="button"
        className={`h-12 w-28 bg-transparent font-semibold capitalize text-neutral-cool-gray ${
          isFirstStep ? 'invisible' : 'visible'
        } hover:text-primary-marine-blue hover:transition`}
        onClick={prevStep}
      >
        go back
      </button>
      {isLastStep ? (
        <button
          className="h-12 w-28 rounded-md bg-primary-purplish-blue font-semibold capitalize text-neutral-white hover:opacity-80 hover:transition"
          onClick={confirmSubmissionHandler}
        >
          confirm
        </button>
      ) : (
        <button
          type="button"
          className="h-12 w-28 rounded-md bg-primary-marine-blue font-semibold capitalize text-neutral-white hover:opacity-80 hover:transition"
          onClick={nextStep}
        >
          next step
        </button>
      )}
    </section>
  );
};

export default ActionButtons;
