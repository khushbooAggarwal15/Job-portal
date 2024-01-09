import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboardpage/dashboardpage";
import LoginPage from "./pages/loginpage/loginpage";
import TicketPage from "./pages/ticketpage/ticketpage";
import Personalizedcard from "./pages/personalizedcard/personalizedcard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tickets" element={<TicketPage />} />
          <Route path="/personal" element={<Personalizedcard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
