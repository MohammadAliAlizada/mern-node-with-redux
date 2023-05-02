
// import './App.css';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { LandingPage } from './screens/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/CreateNote/SingleNote';
import {useState} from 'react';



function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header  setSearch={setSearch}/>
      <main className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}> </Route>
        <Route path="/login" element={<LoginScreen />}> </Route>
        <Route path="/profile" element={<ProfileScreen />}> </Route>
        <Route path="/register" element={<RegisterScreen />}> </Route>
        <Route path="/createnote" element={<CreateNote />}> </Route>
        <Route path="/note/:id" element={<SingleNote />}> </Route>
        <Route path="/mynotes" element={<MyNotes search={search}/>}> </Route>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
