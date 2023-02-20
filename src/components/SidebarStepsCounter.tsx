import { StepsCounterProps } from '../components/dummy-data';
import useFormContext from '../hooks/useFormContent';

const SidebarStepsCounter: React.FC<StepsCounterProps> = ({ id, header, title }) => {
  const { currentStep } = useFormContext();

  const isCurrentStep = id === currentStep + 1;

  const activeStyleBackground = (isToggled: boolean): string =>
    isToggled
      ? 'border-0 bg-primary-pastel-blue'
      : 'border-2 border-primary-pastel-blue bg-transparent';

  const activeStyleText = (isToggled: boolean): string =>
    isToggled ? 'text-primary-marine-blue' : 'text-primary-light-blue';

  return (
    <div className="md:flex md:items-center md:gap-4">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${activeStyleBackground(
          isCurrentStep,
        )}`}
      >
        <p className={`font-semibold ${activeStyleText(isCurrentStep)}`}>{id}</p>
      </span>
      <div className="hidden md:block">
        <small className="text-xs uppercase text-primary-pastel-blue">{header}</small>
        <h3 className="font-semibold uppercase text-neutral-magnolia">{title}</h3>
      </div>
    </div>
  );
};

export default SidebarStepsCounter;
