const Sidebar = () => {
  return (
    <aside className="absolute top-0 right-0 -z-10 block h-1/3 w-screen bg-sidebarMobile bg-cover bg-no-repeat md:static md:z-0 md:inline-block md:h-[568px] md:w-[274px] md:bg-sidebarDesktop md:bg-no-repeat">
      <div className="flex h-5/6 items-start justify-center gap-4 pt-12 md:h-fit md:flex-col md:items-stretch md:gap-8 md:p-10">
        <div className="md:flex md:items-center md:gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-0 bg-primary-pastel-blue">
            <p className="font-semibold text-primary-marine-blue">1</p>
          </span>
          <div className="hidden md:block">
            <small className="text-xs uppercase text-primary-pastel-blue">step 1</small>
            <h3 className="font-semibold uppercase text-neutral-magnolia">your info</h3>
          </div>
        </div>

        <div className="md:flex md:items-center md:gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-pastel-blue bg-transparent">
            <p className="font-semibold text-primary-light-blue">2</p>
          </span>
          <div className="hidden md:block">
            <small className="text-xs uppercase text-primary-pastel-blue">step 2</small>
            <h3 className="font-semibold uppercase text-neutral-magnolia">select plan</h3>
          </div>
        </div>
        <div className="md:flex md:items-center md:gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-pastel-blue bg-transparent">
            <p className="font-semibold text-primary-light-blue">3</p>
          </span>
          <div className="hidden md:block">
            <small className="text-xs uppercase text-primary-pastel-blue">step 3</small>
            <h3 className="font-semibold uppercase text-neutral-magnolia">add-ons</h3>
          </div>
        </div>

        <div className="md:flex md:items-center md:gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-pastel-blue bg-transparent">
            <p className="font-semibold text-primary-light-blue">4</p>
          </span>
          <div className="hidden md:block">
            <small className="text-xs uppercase text-primary-pastel-blue">step 4</small>
            <h3 className="font-semibold uppercase text-neutral-magnolia">summary</h3>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
