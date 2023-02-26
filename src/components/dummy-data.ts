import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';

export interface PersonalInfoInputProps {
  id: number;
  inputName: string;
  inputLabel: string;
  inputType: 'text' | 'email' | 'tel';
  inputPlaceholder: string;
  validate: (value: string) => string | null;
}

export const personalInfoInputData: PersonalInfoInputProps[] = [
  {
    id: 1,
    inputName: 'username',
    inputLabel: 'name',
    inputType: 'text',
    inputPlaceholder: 'e.g. Stephen King',
    validate: (value: string) => {
      if (!value) {
        return 'Name is required';
      } else if (value.length < 3) {
        return 'Name is too short';
      }
      return null;
    },
  },
  {
    id: 2,
    inputName: 'email',
    inputLabel: 'email address',
    inputType: 'email',
    inputPlaceholder: 'e.g. stephenking@lorem.com',
    validate: (value: string) => {
      if (!value) {
        return 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Email is invalid';
      }
      return null;
    },
  },
  {
    id: 3,
    inputName: 'phone',
    inputLabel: 'phone number',
    inputType: 'tel',
    inputPlaceholder: 'e.g. +1 234 567 890',
    validate: (value: string) => {
      if (!value) {
        return 'Phone number is required';
      } else if (!/^[0-9]{10}$/.test(value)) {
        return 'Phone number is invalid';
      }
      return null;
    },
  },
];

export interface FormHeaderProps {
  legend: string;
  details: string;
}

export const formHeaderData = [
  {
    legend: 'Personal info',
    details: 'Please provide your name, email address, and phone number.',
  },
  {
    legend: 'Select your plan',
    details: 'You have the option of monthly or yearly billing.',
  },
  {
    legend: 'Pick add-ons',
    details: 'Add-ons help enhance your gaming experience.',
  },
  {
    legend: 'Finishing up',
    details: 'Double-check everything looks OK before confirming.',
  },
];

export interface StepsCounterProps {
  id: number;
  header: string;
  title: string;
}

export const stepsCounterData: StepsCounterProps[] = [
  {
    id: 1,
    header: 'step 1',
    title: 'your info',
  },
  {
    id: 2,
    header: 'step 2',
    title: 'select plan',
  },
  {
    id: 3,
    header: 'step 3',
    title: 'add-ons',
  },
  {
    id: 4,
    header: 'step 4',
    title: 'summary',
  },
];

export interface PlanSelectionRadioProps {
  id: number;
  radioValue: 'arcade' | 'advanced' | 'pro';
  monthlySubscription: number;
  yearlySubscription: number;
  radioIcon: string;
}

export const planSelectionRadioData: PlanSelectionRadioProps[] = [
  {
    id: 1,
    radioValue: 'arcade',
    monthlySubscription: 9,
    yearlySubscription: 90,
    radioIcon: arcadeIcon,
  },
  {
    id: 2,
    radioValue: 'advanced',
    monthlySubscription: 12,
    yearlySubscription: 120,
    radioIcon: advancedIcon,
  },
  {
    id: 3,
    radioValue: 'pro',
    monthlySubscription: 15,
    yearlySubscription: 150,
    radioIcon: proIcon,
  },
];

export interface AddOnsCheckboxProps {
  id: number;
  title: string;
  checkboxName: 'onlineService' | 'largerStorage' | 'customizableProfile';
  details: string;
  monthlySubscriptionAddition: number;
  yearlySubscriptionAddition: number;
}

export const addOnsCheckboxData: AddOnsCheckboxProps[] = [
  {
    id: 1,
    title: 'Online service',
    checkboxName: 'onlineService',
    details: 'Access to multiplayer games',
    monthlySubscriptionAddition: 1,
    yearlySubscriptionAddition: 10,
  },
  {
    id: 2,
    title: 'Larger storage',
    checkboxName: 'largerStorage',
    details: 'Extra 1TB of cloud save',
    monthlySubscriptionAddition: 2,
    yearlySubscriptionAddition: 20,
  },
  {
    id: 3,
    title: 'Customizable profile',
    checkboxName: 'customizableProfile',
    details: 'Custom theme on your profile',
    monthlySubscriptionAddition: 2,
    yearlySubscriptionAddition: 20,
  },
];
