import { createContext, useState, ReactNode, ChangeEvent, SetStateAction, Dispatch } from 'react';

interface formInputProps {
  username: string;
  email: string;
  phone: string;
  billingPlan: string;
  yearlySubscription: boolean;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

const initialState = {
  username: '',
  email: '',
  phone: '',
  billingPlan: 'arcade',
  yearlySubscription: false,
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};

// Define the type of the form context data
interface FormContextProps {
  formInputs: formInputProps;
  setFormInputs: Dispatch<SetStateAction<formInputProps>>;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Create the form context with an initial value
export const FormContext = createContext<FormContextProps>({
  formInputs: initialState,
  setFormInputs: () => {},
  changeHandler: () => {},
});

// Define the props for the form provider component
interface FormProviderProps {
  children: ReactNode;
}

// Define the form provider component
export const FormProvider = ({ children }: FormProviderProps) => {
  // Set up state for the form data
  const [formInputs, setFormInputs] = useState<FormContextProps['formInputs']>(initialState);

  console.log(formInputs);

  // Define a function to handle changes to the form data
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, name } = e.target;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setFormInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Render the form context provider with its value set to the form data and change handler
  return (
    <FormContext.Provider value={{ formInputs, setFormInputs, changeHandler }}>
      {children}
    </FormContext.Provider>
  );
};