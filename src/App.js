import './App.css';
import { ControlledVsUncontrolledComponent,HigherOrderComponent, ShowContext,UseMemoHook } from './studyTopics'

function App() {
  return (
    <>
      <ControlledVsUncontrolledComponent />
      <HigherOrderComponent/>
      <ShowContext/>
      <UseMemoHook/>
    </>
  );
}

export default App;
