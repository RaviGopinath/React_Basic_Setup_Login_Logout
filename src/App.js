import React, { useReducer } from 'react';
import './App.css';
import Login from './Layout/Public/login';
import Header from './Layout/Private/header';
import Home from './Layout/Private/home';
import Footer from './Layout/Private/footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './Layout/Private/about';
import Signup from './Layout/Public/signup';
import { StateContext } from './Store/Context';
import { InitialState, stateReducer } from './Store/Reducer';


function App() {

  const [state, dispatch] = useReducer(stateReducer,InitialState);
  // console.log(state);
  // console.log(dispatch);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        {state?.Auth ? (
        <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>
        <Footer />
        </>) :
              <Routes>
              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<Signup />}></Route>
              <Route path="*" element={<Navigate to={'login'}></Navigate>}></Route>
            </Routes>
        }

      </Router>
    </StateContext.Provider>
  );
}

export default App;
