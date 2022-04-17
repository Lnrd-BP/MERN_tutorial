import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandinPage from "./screens/Landingpage/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import RegisterScreen from "./screens/RegisterPage/RegisterScreen";
import { useEffect, useState } from "react";
import CreateNote from "./screens/CreateNote/Createnote";
import SingleNote from "./screens/CreateNote/SingleNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen"

const App = () => {

 const [search, setSearch] = useState("")
console.log(`search is`, search);
  return (
    <>
      <Header setSearch={setSearch}/>
      <main>
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
