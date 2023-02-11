import FormSection from './components/FormWrapper';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <main className="flex max-w-7xl gap-5 rounded-2xl bg-neutral-white p-4 shadow-md">
      <Sidebar />
      <FormSection />
    </main>
  );
};

export default App;
