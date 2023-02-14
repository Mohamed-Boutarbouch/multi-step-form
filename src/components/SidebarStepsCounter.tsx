import { StepsCounterProps } from '../components/dummy-data';

const SidebarStepsCounter: React.FC<StepsCounterProps> = ({ id, header, title }) => {
  return (
    <>
      <div className="md:flex md:items-center md:gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-0 bg-primary-pastel-blue">
          <p className="font-semibold text-primary-marine-blue">{id}</p>
        </span>
        <div className="hidden md:block">
          <small className="text-xs uppercase text-primary-pastel-blue">{header}</small>
          <h3 className="font-semibold uppercase text-neutral-magnolia">{title}</h3>
        </div>
      </div>

      {/* <div className="md:flex md:items-center md:gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-pastel-blue bg-transparent">
        <p className="font-semibold text-primary-light-blue">4</p>
      </span>
      <div className="hidden md:block">
        <small className="text-xs uppercase text-primary-pastel-blue">step 4</small>
        <h3 className="font-semibold uppercase text-neutral-magnolia">summary</h3>
      </div>
    </div> */}
    </>
  );
};

export default SidebarStepsCounter;
