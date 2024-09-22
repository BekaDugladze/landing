import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  React from 'react';
import { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./home'))
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={
          <div className='flex flex-col justify-center items-center w-screen h-screen' >
            <h1 style={{
                fontFamily: '"Poller One", serif',
                color: 'rgb(102, 6, 102)',
                fontSize: '30px',
                margin: '20px 0'
            }}>Welcome</h1>
            <p style={{
                            color: 'gray',
                            fontSize: '15px',
                            fontFamily: '"Montserrat", sans-serif',
                            margin: '10px 0'
                        }}>Please Wait...</p>
          </div>}>
            <LazyHome />
            </Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
