//Dependencias
import { Routes, Route } from 'react-router-dom';
//Components
import { Layout } from './components/Layout';
import Footer from "./components/Footer/Footer";
import Detalle from "./components/Detalle/Detalle";
import Card from "./components/ProductCard/Card";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path="detalle" element={<Detalle/>} />

        </Route>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
