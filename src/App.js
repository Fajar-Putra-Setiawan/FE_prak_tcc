import {BrowserRouter, Routes, Route} from "react-router-dom";
import SupplierList from "./components/SupplierList";
import AddSupplier from "./components/AddSupplier";
import EditSupplier from "./components/EditSupplier";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SupplierList/>}/>
        <Route path="add" element={<AddSupplier/>}/>
        <Route path="edit/:id" element={<EditSupplier/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;