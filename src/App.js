import './App.css';
import Data from './assignment-6/Data';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './assignment-6/Home'
import Contact from './assignment-6/Contacts'
import Students from './assignment-6/Student'
import NavBar from './assignment-6/NavBar'
import CreateNew from './assignment-6/AddStudent';
import Edit from './assignment-6/Edit';

function App()
{
  return (
    <Data>
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/student' element={<Students/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/student-new' element={<CreateNew/>} />
      <Route path='/Edit/:id' element={<Edit/>}/>     
    </Routes>
    </BrowserRouter>
    </div>
    </Data> 
    )
};
export default App;