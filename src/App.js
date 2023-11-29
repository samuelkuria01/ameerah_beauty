import './App.css';
import { Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import About from './Component/About';
import Contacts from './Component/Contacts';
import Products from './Component/Products';
import Blog from './Component/Blog';
import BlogDetails from './Component/BlogDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/blog' element={<Blog />}>
            <Route path='blog/:blogId' element={<BlogDetails />}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
