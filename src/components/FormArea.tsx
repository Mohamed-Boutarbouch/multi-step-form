import ActionButtons from './ActionButtons';
import PersonalInfoStep from './PersonalInfoStep';
import PlanSelectionStep from './PlanSelectionStep';
import AddOnsStep from './AddOnsStep';
import SummaryStep from './SummaryStep';

const FormArea = () => {
  return (
    <form className="flex w-full justify-center md:mx-auto md:max-w-[500px] md:flex-col md:justify-between md:py-8">
      {/* <PersonalInfoStep /> */}
      {/* <PlanSelectionStep /> */}
      {/* <AddOnsStep /> */}
      <SummaryStep />
      <ActionButtons />
    </form>
  );
};

export default FormArea;
