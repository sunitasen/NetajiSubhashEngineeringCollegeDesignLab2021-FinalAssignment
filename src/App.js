import './App.css';
import {NavBar} from "./components/Navbar";
import {workflowVar} from "./apollo/reactiveVars";
import {useReactiveVar} from "@apollo/client";
import {HomePage} from "./components/HomePage";
import { Cart } from './components/Cart';
import { SuccessPage } from './components/SuccessPage';

const App = () => {
  const workflow = useReactiveVar(workflowVar);
  return (
    <div className="App">
      <NavBar />
      <br/>
      <br/>
      {
        workflow === 'homepage'
        ?
        <HomePage />
        :
        workflow === 'cart'
        ?
        <Cart/>
        :
        <SuccessPage />
      }
    </div>
  );
}

export default App;
