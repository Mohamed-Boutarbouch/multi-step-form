import { ChangeEvent, useState } from 'react';
import { PersonalInfoInputProps } from '../dummy-data';

interface InputStateProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder: string;
  validate: (value: string) => string | null;
}

type TextProps = PersonalInfoInputProps & InputStateProps;

const PersonalInfoUserInput: React.FC<TextProps> = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  inputType,
  onChange,
  value,
  validate,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const blurHandler = () => {
    const errorMessage = validate(value);
    setError(errorMessage);
    setIsValid(!!errorMessage);
  };

  return (
    <article>
      <div className="flex justify-between">
        <label htmlFor={inputName} className="capitalize text-primary-marine-blue">
          {inputLabel}
        </label>
        {error && <p className="font-semibold text-primary-strawberry-red">{error}</p>}
      </div>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={inputPlaceholder}
        className={`h-10 w-full rounded-md border border-neutral-cool-gray px-4 
        ${isValid ? 'outline-primary-purplish-blue' : 'outline-primary-strawberry-red'}
         placeholder:text-neutral-cool-gray`}
        value={value}
        onChange={onChange}
        onBlur={blurHandler}
      />
    </article>
  );
};

export default PersonalInfoUserInput;
