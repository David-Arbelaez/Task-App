import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='task-app'>
        <div className='title'>
          Today's Task
        </div>
        <div className='task-list'>
          <TaskList/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
