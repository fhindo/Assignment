import './App.css';
import AllProducts from "./components/AllProducts"
import ProductsForm from './components/ProductsForm';
import { Routes, Route, Link } from "react-router-dom";
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import {useState} from "react"

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App">
      <h1>Product Manager Main Page</h1>
      <Routes>
        <Route exact path="/" element={
          <>
            <ProductsForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductsForm>
            <hr></hr>
            <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </>
        }
        ></Route>
        <Route exact path='/:id' element={<OneProduct></OneProduct>}></Route>
        <Route exact path='/edit/:id' element={<EditProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
