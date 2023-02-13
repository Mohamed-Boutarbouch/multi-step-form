const ActionButtons = () => {
  return (
    <section className="absolute bottom-0 left-0 flex h-16 w-full items-center justify-between bg-yellow-200 md:static">
      <button type="button" className="h-8 w-16 bg-red-600">
        prev
      </button>
      <button type="button" className="h-8 w-16 bg-cyan-400">
        next
      </button>
    </section>
    // <div className="absolute left-0 bottom-0 flex h-10 w-screen items-center justify-between bg-neutral-white px-3 md:static md:h-fit md:w-full md:px-0">
    //   <button
    //     type="button"
    //     className="h-12 bg-primary-purplish-blue p-2 capitalize text-neutral-white"
    //   >
    //     Previous
    //   </button>
    //   <button
    //     type="button"
    //     className="h-12 bg-primary-strawberry-red p-2 capitalize text-neutral-white"
    //   >
    //     Next
    //   </button>
    // </div>
  );
};

export default ActionButtons;
