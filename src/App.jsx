import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
