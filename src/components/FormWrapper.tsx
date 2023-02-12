import ActionButtons from './ActionButtons';
import PersonalInfo from './PersonalInfo';
import PlanSelection from './PlanSelection';

const FormWrapper = () => {
  return (
    <section className="mx-4 flex min-w-[442px] flex-col justify-between px-4 pt-8 pb-6 md:p-12 md:pb-6">
      <form className="">
        {/* <PersonalInfo /> */}
        <PlanSelection />
      </form>
      <ActionButtons />
    </section>
  );
};

export default FormWrapper;
