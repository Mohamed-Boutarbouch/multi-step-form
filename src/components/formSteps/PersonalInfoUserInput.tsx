import { ChangeEvent, FocusEvent, useState } from 'react';
import { PersonalInfoInputProps } from '../dummy-data';

interface InputStateProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder: string;
}

type TextProps = PersonalInfoInputProps & InputStateProps;

const PersonalInfoUserInput: React.FC<TextProps> = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  inputType,
  onChange,
  value,
}) => {
  const [isError, setIsError] = useState<boolean>(false);

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.trim().length === 0) {
      setIsError(true);
    }
  };

  const focusHandler = () => {
    setIsError(false);
  };

  return (
    <article>
      <div className="flex justify-between">
        <label htmlFor={inputName} className="capitalize text-primary-marine-blue">
          {inputLabel}
        </label>
        {isError && (
          <p className="font-semibold text-primary-strawberry-red">This field is required</p>
        )}
      </div>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={inputPlaceholder}
        className={`h-10 w-full rounded-md border px-4 
        ${
          isError
            ? 'border-2 border-primary-strawberry-red'
            : 'border-neutral-cool-gray outline-primary-purplish-blue'
        }
         placeholder:text-neutral-cool-gray`}
        value={value}
        onChange={onChange}
        onBlur={(event) => blurHandler(event)}
        onFocus={focusHandler}
      />
    </article>
  );
};

export default PersonalInfoUserInput;
