import { createContext, useState, ReactNode, ChangeEvent, SetStateAction, Dispatch } from 'react';
import {
  addOnsCheckboxData,
  formHeaderData,
  AddOnsCheckboxProps,
  planSelectionRadioData,
  PlanSelectionRadioProps,
} from '../components/dummy-data';

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

interface AddOnsKeys {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

// Define the type of the form context data
interface FormContextProps {
  formInputs: formInputProps;
  setFormInputs: Dispatch<SetStateAction<formInputProps>>;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  selectedBillingPlan: PlanSelectionRadioProps[];
  selectedAddOns: AddOnsCheckboxProps[];
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

// Create the form context with an initial value
export const FormContext = createContext<FormContextProps>({
  formInputs: initialState,
  setFormInputs: () => {},
  changeHandler: () => {},
  currentStep: 0,
  nextStep() {},
  prevStep() {},
  selectedBillingPlan: [],
  selectedAddOns: [],
});

// Define the props for the form provider component
interface FormProviderProps {
  children: ReactNode;
}

// Define the form provider component
export const FormProvider = ({ children }: FormProviderProps) => {
  // Set up state for the form data
  const [formInputs, setFormInputs] = useState<FormContextProps['formInputs']>(initialState);
  const [currentStep, setCurrentStep] = useState(0);

  const maxFormSteps = formHeaderData.length - 1;

  // Define a function to handle changes to the form data
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, name } = e.target;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setFormInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep >= maxFormSteps) return setCurrentStep(currentStep);

    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 0) return setCurrentStep(currentStep);

    setCurrentStep(currentStep - 1);
  };

  // Toggle pricing based on monthly/yearly subscription
  const { username, email, phone, yearlySubscription, billingPlan, ...AddOns } = formInputs;

  const selectedBillingPlan = planSelectionRadioData.filter((v) => v.radioValue === billingPlan);

  // Remove type any later
  // Any type to be fixed later
  const selectedAddOnsArr = Object.keys(AddOns).filter((el) => (AddOns as any)[el] !== false);

  const selectedAddOns = addOnsCheckboxData.filter((elObj) => {
    return selectedAddOnsArr.some((elArr) => elObj.checkboxName === elArr);
  });

  // Render the form context provider with its value set to the form data and change handler
  return (
    <FormContext.Provider
      value={{
        formInputs,
        setFormInputs,
        changeHandler,
        currentStep,
        nextStep,
        prevStep,
        selectedBillingPlan,
        selectedAddOns,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
