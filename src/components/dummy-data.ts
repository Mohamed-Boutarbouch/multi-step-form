import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';

export interface personalInfoInputProps {
  id: number;
  inputName: string;
  inputLabel: string;
  inputType: string;
  inputPlaceholder: string;
}

export const personalInfoInputData: personalInfoInputProps[] = [
  {
    id: 1,
    inputName: 'name',
    inputLabel: 'name',
    inputType: 'text',
    inputPlaceholder: 'e.g. Stephen King',
  },
  {
    id: 2,
    inputName: 'email',
    inputLabel: 'email address',
    inputType: 'email',
    inputPlaceholder: 'e.g. stephenking@lorem.com',
  },
  {
    id: 3,
    inputName: 'phone',
    inputLabel: 'phone number',
    inputType: 'tel',
    inputPlaceholder: 'e.g. +1 234 567 890',
  },
];

// export interface formHeaderProps {
//   id: number;
//   legend: string;
//   details: string;
// }

// export const formHeaderData: formHeaderProps[] = [
//   {
//     id: 1,
//     legend: 'Personal info',
//     details: 'Please provide your name, email address, and phone number.',
//   },
//   {
//     id: 2,
//     legend: 'Select your plan',
//     details: 'You have the option of monthly or yearly billing.',
//   },
//   {
//     id: 3,
//     legend: 'Pick add-ons',
//     details: 'Add-ons help enhance your gaming experience.',
//   },
//   {
//     id: 4,
//     legend: 'Finishing up',
//     details: 'Double-check everything looks OK before confirming.',
//   },
// ];

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
  radioName: string;
  monthlySubscription: number;
  yearlySubscription: number;
  radioIcon: string;
}

export const planSelectionRadioData: PlanSelectionRadioProps[] = [
  {
    id: 1,
    radioName: 'arcade',
    monthlySubscription: 9,
    yearlySubscription: 90,
    radioIcon: arcadeIcon,
  },
  {
    id: 2,
    radioName: 'advanced',
    monthlySubscription: 12,
    yearlySubscription: 120,
    radioIcon: advancedIcon,
  },
  {
    id: 3,
    radioName: 'pro',
    monthlySubscription: 15,
    yearlySubscription: 150,
    radioIcon: proIcon,
  },
];

export interface AddOnsCheckboxProps {
  id: number;
  title: string;
  inputName: string;
  details: string;
  monthlySubscriptionAddition: number;
  yearlySubscriptionAddition: number;
}

export const addOnsCheckboxData: AddOnsCheckboxProps[] = [
  {
    id: 1,
    title: 'Online service',
    inputName: 'online-service',
    details: 'Access to multiplayer games',
    monthlySubscriptionAddition: 1,
    yearlySubscriptionAddition: 10,
  },
  {
    id: 2,
    title: 'Larger storage',
    inputName: 'larger-storage',
    details: 'Extra 1TB of cloud save',
    monthlySubscriptionAddition: 2,
    yearlySubscriptionAddition: 20,
  },
  {
    id: 3,
    title: 'Customizable profile',
    inputName: 'customizable-profile',
    details: 'Custom theme on your profile',
    monthlySubscriptionAddition: 2,
    yearlySubscriptionAddition: 20,
  },
];
