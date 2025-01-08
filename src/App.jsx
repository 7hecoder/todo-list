import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  // Load todos from local storage on component mount
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  // Save todos to local storage
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Toggle the visibility of completed todos
  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  // Handle editing a todo

  const handleEdit = (e, id) => {
    // Find the todo to edit
    const todoToEdit = todos.find(item => item.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.todo); // Set the input value to the todo text
      const newTodos = todos.filter(item => item.id !== id); // Remove the todo from the list
      setTodos(newTodos); // Update the todos state
      saveToLS(); // Save the updated todos to local storage
    }
  };

  // Handle deleting a todo
  const handleDelete = (e, id) => {
    const newTodos = todos.filter(item => item.id !== id); // Remove the todo from the list
    setTodos(newTodos); // Update the todos state
    saveToLS(); // Save the updated todos to local storage
  };

  // Handle adding a new todo
  const handleAdd = () => {
    if (todo.trim() === "") return; // Prevent adding empty todos
    const newTodo = { id: uuidv4(), todo, isCompleted: false }; // Create a new todo object
    setTodos([...todos, newTodo]); // Add the new todo to the list
    setTodo(""); // Clear the input field
    saveToLS(); // Save the updated todos to local storage
  };

  // Handle input change
  const handleChange = (e) => {
    setTodo(e.target.value); // Update the todo input value
  };

  // Handle checkbox toggle for completion status
  const handleCheckbox = (e) => {
    const id = e.target.name; // Get the id from the checkbox name
    const index = todos.findIndex(item => item.id === id); // Find the index of the todo
    if (index !== -1) {
      const newTodos = [...todos]; // Create a copy of the todos array
      newTodos[index].isCompleted = !newTodos[index].isCompleted; // Toggle the completion status
      setTodos(newTodos); // Update the todos state
      saveToLS(); // Save the updated todos to local storage
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-[#12343b] min-h-[80vh] md:w-[35%] shadow-black shadow-xl">
        <h1 className='font-bold text-center text-3xl text-white'>UTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold text-[#e49948]'>Add a new Todo</h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-[#e4ac71] mx-2 rounded-full hover:bg-[#e49948] disabled:bg-[#eec99f] p-4 py-2 text-sm font-bold text-white'>Save</button>
          </div>
        </div>
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='mx-2 text-[#e49948]' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold text-[#e49948]'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 text-[#e49948]'>No Todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className={"todo text-[#e49948] flex my-3 justify-between"}>
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-[#e4ac71] hover:bg-[#e49948] p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>
                    <FaEdit />
                  </button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='bg-[#e4ac71] hover:bg-[#e49948] p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
