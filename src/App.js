import './App.css';
import Meels from './components/meels/Meels';
import ProductContayner from './components/product/ProductContayner';
import { WrapperMeels } from './store';

function App() {
  return (
    <WrapperMeels>
        <ProductContayner/>
        <Meels/>
    </WrapperMeels>
  );
}

export default App;

