import './App.css';
import TodosPage from './components/TodosPage';
import { ModalProvider } from './context/ModalProvider';
import TodosProvider from './context/TodosProvider';

function App() {
  return (
    <TodosProvider>
      <ModalProvider>
        <TodosPage />
      </ModalProvider>
    </TodosProvider>
  );
}

export default App;
