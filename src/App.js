
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Componants/Navbar/Navbar';
import Footer from './Componants/Footer/Footer';
import Home from './Pages/Home/Home'
import CourseDetails from './Pages/Courses/CourseDetails';
function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course/:id' element={<CourseDetails/>}></Route>
    </Routes>
    <Footer/>
   </>

  );
}

export default App;
