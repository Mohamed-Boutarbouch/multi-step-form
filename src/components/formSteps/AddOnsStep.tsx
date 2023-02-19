import useFormContext from '../../hooks/useFormContent';
import { addOnsCheckboxData } from '../dummy-data';
import FormHeaderContainer from '../FormHeaderContainer';
import AddOnsCheckboxInput from './AddOnsCheckboxInput';

interface CheckboxFormProps {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

const AddOnsStep = () => {
  const { formInputs, changeHandler } = useFormContext();

  return (
    <FormHeaderContainer>
      <section>
        <ul className="flex flex-col gap-4">
          {addOnsCheckboxData.map((checkboxData) => {
            return (
              <AddOnsCheckboxInput
                key={checkboxData.id}
                {...checkboxData}
                isChecked={formInputs[checkboxData.checkboxName as keyof CheckboxFormProps]}
                onChange={changeHandler}
              />
            );
          })}
        </ul>
      </section>
    </FormHeaderContainer>
  );
};

export default AddOnsStep;
