import { ChangeEvent } from 'react';
import { PersonalInfoInputProps } from '../dummy-data';

interface InputStateProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder: string;
}

type InputProps = PersonalInfoInputProps & InputStateProps;

const PersonalInfoUserInput: React.FC<InputProps> = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  inputType,
  onChange,
  value,
}) => {
  return (
    <article>
      <div className="flex justify-between">
        <label htmlFor={inputName} className="capitalize text-primary-marine-blue">
          {inputLabel}
        </label>
        <p className="hidden font-semibold text-primary-strawberry-red invalid:block">
          This field is required
        </p>
      </div>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={inputPlaceholder}
        className="h-10 w-full rounded-md border border-neutral-cool-gray px-4 outline-primary-purplish-blue placeholder:text-neutral-cool-gray"
        value={value}
        onChange={onChange}
      />
    </article>
  );
};

export default PersonalInfoUserInput;
