const PersonalInfo = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="capitalize">
        name
      </label>
      <input type="text" name="name" id="name" className="bg-neutral-cool-gray" />
      <label htmlFor="email" className="capitalize">
        email address
      </label>
      <input type="email" name="email" id="email" className="bg-neutral-cool-gray" />
      <label htmlFor="phone" className="capitalize">
        phone number
      </label>
      <input type="text" name="phone" id="phone" className="bg-neutral-cool-gray" />
    </div>
  );
};

export default PersonalInfo;
