import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useauth } from './context/AuthProvider';
import Contact from './contact/Contact';





const App = () => {

  const [authUser, setAuthUser] = useauth();
  console.log(authUser);

  return (
    <>
       <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course" element={authUser?<Courses />: <Navigate to="/signup" />}/> 
                <Route path="/contact" element={<Contact />} />         
                <Route path="/signup" element={<Signup />}/>
        </Routes>
        <Toaster />
       </div>
    </>
  );

}

export default App;
