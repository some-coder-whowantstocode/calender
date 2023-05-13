import './App.css';
import Calender from './Calender';
import {Routes,Route} from 'react-router-dom'
import Todo from './Todo';
import List from './List';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Calender />}>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/list' element={<List/>}/>
        </Route>
      </Routes>
   </>
  );
}

export default App;
