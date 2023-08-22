
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path='/' element={ <Menu />} />
            <Route path='/:repo' element={ <Project />} />
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
