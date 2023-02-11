import FormWrapper from './components/FormWrapper';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <main className="gap-5 rounded-2xl bg-neutral-white shadow-md md:flex md:p-4">
      <Sidebar />
      <FormWrapper />
    </main>
  );
};

export default App;
