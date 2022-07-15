import './App.css';
import AddNewTodo from './component/AddNewTodo';
import Calendar from './component/Calendar';
import EditTodo from './component/EditTodo';
import Main from './component/Main';
import Projects from './component/Projects';
import Todos from './component/Todos';
import User from './component/User';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;