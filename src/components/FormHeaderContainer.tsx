interface hello {
  children: React.ReactNode;
}

const FormHeaderContainer = ({ children }: hello) => {
  return (
    <fieldset className="flex h-full w-11/12 flex-col justify-between gap-6 md:block md:w-full">
      <legend className="mb-1 text-2xl font-bold text-primary-marine-blue md:mb-2 md:text-3xl">
        Personal info
      </legend>
      <p className="mb-1.5 text-neutral-cool-gray md:mb-10">
        Please provide your name, email address, and phone number.
      </p>
      {children}
    </fieldset>
  );
};

export default FormHeaderContainer;
