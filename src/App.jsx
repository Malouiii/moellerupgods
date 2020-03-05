import React from 'react';
import './App.scss';
import Header from './components/layout/header/Header';
import Navbar from './components/layout/header/headerNavbar/Navbar';
import Intro from './components/layout/intro/Intro';
import Nyheder from './components/layout/nyheder/Nyheder';
import Footer from './components/layout/footer/Footer';
import Outro from './components/layout/outro/Outro';
import Aktiviteter from './components/layout/aktiviteter/Aktiviteter';

function App() {
  return (
    <div>
      <div className="container">
        <header className="text-center">
          <Header />
          <Navbar />
        </header>
        <main>
          <Intro />
          <Nyheder />
          <hr/>
          <Aktiviteter />
          <Outro />
        </main>
      </div>
      <footer className="container-fluid">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
