import { Route, Routes } from 'react-router-dom';
import './App.css';


// pages 
import { AllBlog } from './pages/AllBlog';
import { Blog } from './pages/Blog';
import { BlogInfo } from './pages/BlogInfo';
import { DeshBord } from './pages/DeshBord';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Nav } from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allblog" element={<AllBlog />} />
        <Route path="/bloginfo/:id" element={<BlogInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/DeshBord" element={<DeshBord />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
