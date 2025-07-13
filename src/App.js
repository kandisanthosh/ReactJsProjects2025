import ClickEventHandler from './components/ClickEventHandler';
import Counter from './components/Counter';
import DemoComponent from './components/DemoComponents';
import EmployeeList from './components/EmployeeList';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="App">
      <DemoComponent name="santhosh" country="india"></DemoComponent>
      <ClickEventHandler></ClickEventHandler>
      <EmployeeList></EmployeeList>
      <FormInput></FormInput>
      <Counter></Counter>
    </div>
  );
}

export default App;
