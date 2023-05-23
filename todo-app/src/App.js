import {Title} from './components/Title'; 
import { Todo } from './components/Todo';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className=" bg-purple-100 min-h-screen h-full font-gochiHand text-purple-900 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title/>
        <TodoInput/>
        <TodoList>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/> 
        </TodoList>
      </div>
    </div>
  );
}

export default App;
