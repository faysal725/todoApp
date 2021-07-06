import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <div style={{textAlign:"center", height:"880px", backgroundColor:"black"}}>
      <Todo></Todo>
    </div>
  );
}

export default App;
