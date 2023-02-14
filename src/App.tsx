import FormArea from './components/FormArea';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <FormArea />
    </Layout>
  );
};

export default App;
