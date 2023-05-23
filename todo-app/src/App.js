import {Title} from './components/Title'; 
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className=" bg-purple-100 min-h-screen h-full text-purple-900 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title/>
        <TodoInput/>
        <TodoList>
          <h2>ToDo List</h2>
        </TodoList>
      </div>
    </div>
  );
}

export default App;
