import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Cart from "./components/Cart"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <Nav></Nav>
      <Routes>
        <Route index path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    

    </div>
    
  );
}

export default App;
