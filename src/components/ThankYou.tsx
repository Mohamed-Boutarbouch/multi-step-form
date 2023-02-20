import thankYouIcon from '../assets/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <section className="m-10 flex flex-col items-center justify-center gap-6">
      <img src={thankYouIcon} alt="Thank you" />
      <h1 className="text-3xl font-bold text-primary-marine-blue">Thank you!</h1>
      <p className="text-center text-neutral-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com
      </p>
    </section>
  );
};

export default ThankYou;
