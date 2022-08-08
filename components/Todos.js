import { useSelector, useDispatch } from "react-redux";
import { toggleComplete , removeTodo } from '../store/slice/todoSlice';

const Todos = () => {
  const todosItem = useSelector((state) => state.todo.todos);

    const dispatch = useDispatch();

    console.log(todosItem);

  const handleComplete = (id) => {
    dispatch(toggleComplete(id));
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  }
    
  return (
    <>
      {todosItem.map((todo) => (
        <div key={todo.id} className="flex mb-4 items-center">
          {todo.completed ? (
            <>
              <p className="w-3/4 line-through text-green-500">{todo.text}</p>
              <div className="w-1/4 flex justify-end">
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500"
                >
                  Not Done
                </button>
                <button onClick={() => handleRemove(todo.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
                  Remove
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="w-3/4 text-gray-700">{todo.text}</p>
              <div className="w-1/4 flex justify-end">
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
                >
                  Done
                </button>
                <button onClick={() => handleRemove(todo.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
                  Remove
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Todos;
