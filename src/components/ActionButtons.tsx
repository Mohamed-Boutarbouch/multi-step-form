const ActionButtons = () => {
  return (
    <div className="absolute left-0 bottom-0 flex h-24 w-screen items-center justify-between bg-neutral-white px-3 md:px-0 md:static md:h-fit md:w-full">
      <button
        type="button"
        className="h-12 bg-primary-purplish-blue p-2 capitalize text-neutral-white"
      >
        Previous
      </button>
      <button
        type="button"
        className="h-12 bg-primary-strawberry-red p-2 capitalize text-neutral-white"
      >
        Next
      </button>
    </div>
  );
};

export default ActionButtons;
