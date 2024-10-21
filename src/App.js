import './App.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <h1>What are your plans for today?</h1>
      </div>
      <ToDoList />
      
    </div>
  )
}

export default App;
