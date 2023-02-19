import { ChangeEvent, useState } from 'react';
import { addOnsCheckboxData } from '../dummy-data';
import FormHeaderContainer from '../FormHeaderContainer';
import AddOnsCheckboxInput from './AddOnsCheckboxInput';

interface CheckboxFormProps {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

const initState = {
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};

const AddOnsStep = () => {
  const [checkboxFormValues, setCheckboxFormValues] = useState<CheckboxFormProps>(initState);

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCheckboxFormValues({ ...checkboxFormValues, [name]: checked });
  };

  return (
    <FormHeaderContainer>
      <section>
        <ul className="flex flex-col gap-4">
          {addOnsCheckboxData.map((checkboxData) => {
            return (
              <AddOnsCheckboxInput
                key={checkboxData.id}
                {...checkboxData}
                isChecked={checkboxFormValues[checkboxData.checkboxName as keyof CheckboxFormProps]}
                onChange={checkboxChangeHandler}
              />
            );
          })}
        </ul>
      </section>
    </FormHeaderContainer>
  );
};

export default AddOnsStep;
