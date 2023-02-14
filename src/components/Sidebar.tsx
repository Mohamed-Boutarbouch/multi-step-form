import SidebarStepsCounter from './SidebarStepsCounter';
import { stepsCounterData } from './dummy-data';

const SidebarNew = () => {
  return (
    <aside>
      <div className="absolute top-0 left-0 -z-10 h-1/4 w-screen bg-sidebarMobile bg-cover bg-no-repeat md:static md:h-full md:w-[274px] md:rounded-lg md:bg-sidebarDesktop md:bg-auto">
        <div className="flex h-[5/6] items-start justify-center gap-4 pt-12 md:h-fit md:flex-col md:items-stretch md:gap-8 md:p-10">
          {stepsCounterData.map((step) => {
            return <SidebarStepsCounter key={step.id} {...step} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default SidebarNew;
