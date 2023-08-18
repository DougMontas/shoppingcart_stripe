import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Cancel from "./pages/Cancel.js";
import Store from "./pages/Store.js";
import Success from "./pages/Success.js";
import CartProvider from "./CartContext.js";

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent>NavBar</NavbarComponent>

        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
