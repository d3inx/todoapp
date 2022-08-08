import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slice/todoSlice';

const AddTodo = () => {

    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: Date.now(),
            text: todo,
            completed: false
        }));
        setTodo("");
    }
    

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
        placeholder="Add Todo"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo} className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
