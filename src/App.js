import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboardpage/dashboardpage";
import LoginPage from "./pages/loginpage/loginpage";
import TicketPage from "./pages/ticketpage/ticketpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tickets" element={<TicketPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
