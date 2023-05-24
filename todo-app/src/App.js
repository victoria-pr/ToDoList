import React, {useEffect, useState} from 'react'; 
import {Title} from './components/Title'; 
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1; 

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos, newTodo];
    setTodos(todoList);
    
  }

  const handleSetCompleted = (id) => { 
    const updatedList = todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed} 
      }
      return todo;
    })
    setTodos(updatedList);
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  const handleClearCompleted = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  }

  const showAllTodos = () => {
    setActiveFilter("all");
  }

  const showActiveTodos = () => {
    setActiveFilter("active");
  }

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  }

  useEffect(() => {
    if(activeFilter === "all"){
      setFilteredTodos(todos)
    }else if(activeFilter ==="active"){
      const activeTodos= todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    }else if(activeFilter === "completed"){
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }

  }, [activeFilter, todos])

  return (
    <div className=" bg-purple-100 min-h-screen h-full font-gochiHand text-purple-400 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title/>
        <TodoInput addTodo={addTodo}/>
        <TodoList 
        activeFilter={activeFilter }
        todos={filteredTodos}
        handleDelete={handleDelete}
        handleSetCompleted={handleSetCompleted}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
