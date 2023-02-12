import ActionButtons from './ActionButtons';
import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import PlanSelection from './PlanSelection';
import Summary from './Summary';

const FormWrapper = () => {
  return (
    <section className="mx-4 flex min-w-[442px] flex-col justify-between px-4 pt-8 pb-6 md:p-12 md:pb-6">
      <form className="">
        {/* <PersonalInfo /> */}
        {/* <PlanSelection /> */}
        <AddOns />
        {/* <Summary /> */}
      </form>
      <ActionButtons />
    </section>
  );
};

export default FormWrapper;
