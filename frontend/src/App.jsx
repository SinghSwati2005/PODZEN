import React from 'react';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login.jsx";
import Categories from "./page/Categories.jsx";
import AllPodcasts from "./page/AllPodcasts.jsx";
import ForgotPassword from "./page/ForgotPassword.jsx";
import KnowledgeLearning from './page/KnowledgeLearning';
import RelaxChill from './page/RelaxChill.jsx';
import Motivation from './page/Motivation.jsx';
import Mental from './page/Mental.jsx';
import Student from './page/Student.jsx';
import Profile from './page/Profile.jsx';

const App = () => {
  return (
    <div className="">
    
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />}>
        {" "}
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/all-podcasts" element={<AllPodcasts />} />
        <Route path="/knowledge-learning" element={<KnowledgeLearning />} /> 
        <Route path="/relax-chill" element={<RelaxChill />} /> 
        <Route path="/motivation-inspiration" element={<Motivation />} /> 
        <Route path="/mental-health-wellbeing" element={<Mental />} /> 
        <Route path="/student-life" element={<Student />} /> 
       

        </Route>
        
        <Route path="/" element={<AuthLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        </Routes>
        </Router>
    </div>
  );
};

export default App;
