import { addOnsCheckboxData } from '../dummy-data';
import FormHeaderContainer from '../FormHeaderContainer';
import AddOnsCheckboxInput from './AddOnsCheckboxInput';

const AddOnsStep = () => {
  return (
    <FormHeaderContainer>
      <section>
        <ul className="flex flex-col gap-4">
          {addOnsCheckboxData.map((checkboxData) => {
            return <AddOnsCheckboxInput key={checkboxData.id} {...checkboxData} />;
          })}
        </ul>
      </section>
    </FormHeaderContainer>
  );
};

export default AddOnsStep;
