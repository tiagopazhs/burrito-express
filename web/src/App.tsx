import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React from "react";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";

// function App(): JSX.Element {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/orders" element={<Orders />} />
//       </Routes>
//     </HashRouter>
//   );
// }

// export default App;


