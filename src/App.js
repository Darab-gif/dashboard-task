import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Customer from "./pages/Customer";
import Product from "./pages/Product";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Sidebar />
        <div className="bg-bg  mt-[2rem] h-[999px] w-full">
          <Routes>
            <Route path="/Customer" element={<Customer />} />
            <Route path="/Products" element={<Product />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Setting" element={<Setting />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
