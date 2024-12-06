import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DailyPage from "./pages/DailyPage/DailyPage";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import YearlyPage from "./pages/YearlyPage/YearlyPage";
import MasterPlanPage from "./pages/MasterPlanPage/MasterPlanPage";
import MonthlyPage from "./pages/MonthlyPage/MonthlyPage";
import WeeklyPage from "./pages/WeeklyPage/WeeklyPage";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<DailyPage />} />
          <Route path="/weekly" element={<WeeklyPage />} />
          <Route path="/monthly" element={<MonthlyPage />} />
          <Route path="/yearly" element={<YearlyPage />} />
          <Route path="/masterplan" element={<MasterPlanPage />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
