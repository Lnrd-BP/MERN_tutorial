import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandinPage from "./screens/Landingpage/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import RegisterScreen from "./screens/RegisterPage/RegisterScreen";
import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     Navigate("/mynotes");
  //   }
  // }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
