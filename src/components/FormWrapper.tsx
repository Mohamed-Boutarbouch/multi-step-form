import ActionButtons from './ActionButtons';
import PersonalInfo from './PersonalInfo';

const FormWrapper = () => {
  return (
    <section className="mx-4 flex flex-col justify-between px-4 pt-8 pb-6 md:p-12 md:pb-6">
      <form>
        <PersonalInfo />
      </form>
      <ActionButtons />
    </section>
  );
};

export default FormWrapper;
