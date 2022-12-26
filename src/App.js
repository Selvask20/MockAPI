import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './Edit';
import Form from './Form';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form></Form>}></Route>
        <Route path='/table' element={<Table></Table>}></Route>
        <Route path='/update' element={<Edit></Edit>}></Route>

      </Routes>
   
    </div>
  );
}

export default App;
