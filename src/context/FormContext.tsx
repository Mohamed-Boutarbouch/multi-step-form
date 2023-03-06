import {
  createContext,
  useState,
  ReactNode,
  ChangeEvent,
  FormEvent,
  SetStateAction,
  Dispatch,
} from 'react';
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

interface FormContextProps {
  formInputs: formInputProps;
  setFormInputs: Dispatch<SetStateAction<formInputProps>>;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToBillingPlan: () => void;
  selectedBillingPlan: PlanSelectionRadioProps[];
  selectedAddOns: AddOnsCheckboxProps[];
  totalMonth: number;
  totalYear: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  confirmSubmissionHandler: () => void;
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
  formSubmitted: boolean;
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

export const FormContext = createContext<FormContextProps>({
  formInputs: initialState,
  setFormInputs: () => {},
  changeHandler: () => {},
  currentStep: 0,
  nextStep() {},
  prevStep() {},
  goToBillingPlan() {},
  selectedBillingPlan: [],
  selectedAddOns: [],
  totalMonth: 0,
  totalYear: 0,
  isFirstStep: true,
  isLastStep: false,
  confirmSubmissionHandler: () => {},
  submitHandler: () => {},
  formSubmitted: false,
});

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formInputs, setFormInputs] = useState<FormContextProps['formInputs']>(initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [confirmSubmission, setConfirmSubmission] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const maxFormSteps = formHeaderData.length - 1;

  const isFirstStep = currentStep === 0;
  const isLastStep = maxFormSteps === currentStep;

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

  const goToBillingPlan = () => {
    setCurrentStep(1);
  };

  const { username, email, phone, yearlySubscription, billingPlan, ...AddOns } = formInputs;

  const selectedBillingPlan = planSelectionRadioData.filter(
    (plan) => plan.radioValue === billingPlan,
  );

  // Any type to be fixed later
  const selectedAddOnsArr = Object.keys(AddOns).filter((el) => (AddOns as any)[el] !== false);

  const selectedAddOns = addOnsCheckboxData.filter((elObj) => {
    return selectedAddOnsArr.some((elArr) => elObj.checkboxName === elArr);
  });

  const billingPlanMonth = selectedBillingPlan.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.monthlySubscription;
  }, 0);

  const billingPlanYear = selectedBillingPlan.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.yearlySubscription;
  }, 0);

  const addOnsMonth = selectedAddOns.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.monthlySubscriptionAddition;
  }, 0);

  const addOnsYear = selectedAddOns.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.yearlySubscriptionAddition;
  }, 0);

  const totalMonth = billingPlanMonth + addOnsMonth;
  const totalYear = billingPlanYear + addOnsYear;

  const confirmSubmissionHandler = () => {
    setConfirmSubmission(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    confirmSubmission && setFormSubmitted(true);
  };

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
        goToBillingPlan,
        totalMonth,
        totalYear,
        isFirstStep,
        isLastStep,
        submitHandler,
        confirmSubmissionHandler,
        formSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
