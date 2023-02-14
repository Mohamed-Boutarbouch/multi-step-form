interface formHeaderProps {
  id: number;
  legend: string;
  details: string;
}

export const formHeaderData: formHeaderProps[] = [
  {
    id: 1,
    legend: 'Personal info',
    details: 'Please provide your name, email address, and phone number.',
  },
  {
    id: 2,
    legend: 'Select your plan',
    details: 'You have the option of monthly or yearly billing.',
  },
  {
    id: 3,
    legend: 'Pick add-ons',
    details: 'Add-ons help enhance your gaming experience.',
  },
  {
    id: 4,
    legend: 'Finishing up',
    details: 'Double-check everything looks OK before confirming.',
  },
];

interface stepsCounterProps {
  id: number;
  header: string;
  title: string;
}

export const stepsCounterData: stepsCounterProps[] = [
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
    header: 'step 1',
    title: 'add-ons',
  },
  {
    id: 4,
    header: 'step 1',
    title: 'summary',
  },
];

interface planSelectionCheckboxProps {
  id: number;
  title: string;
  monthlySubscription: number;
  yearlySubscription: number;
  icon: string;
}

export const planSelectionCheckboxData: planSelectionCheckboxProps[] = [
  {
    id: 1,
    title: 'arcade',
    monthlySubscription: 9,
    yearlySubscription: 90,
    icon: '../assets/icon-arcade.svg',
  },
  {
    id: 2,
    title: 'advanced',
    monthlySubscription: 12,
    yearlySubscription: 120,
    icon: '../assets/icon-advanced.svg',
  },
  {
    id: 3,
    title: 'pro',
    monthlySubscription: 15,
    yearlySubscription: 150,
    icon: '../assets/icon-pro.svg',
  },
];

interface planSelectionRadioProps {
  id: number;
  title: string;
  details: string;
  monthlySubscriptionAddition: number;
  yearlySubscriptionAddition: number;
}

export const addOnsRadioData: planSelectionRadioProps[] = [
  {
    id: 1,
    title: 'Online service',
    details: 'Access to multiplayer games',
    monthlySubscriptionAddition: 1,
    yearlySubscriptionAddition: 10,
  },
  {
    id: 2,
    title: 'Larger storage',
    details: 'Extra 1TB of cloud save',
    monthlySubscriptionAddition: 2,
    yearlySubscriptionAddition: 20,
  },
  {
    id: 3,
    title: 'Customizable profile',
    details: 'Custom theme on your profile',
    monthlySubscriptionAddition: 2,
    yearlySubscriptionAddition: 20,
  },
];

// const personalInfoInputData
