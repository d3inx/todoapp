import AddTodo from "./AddTodo"
import dynamic from 'next/dynamic'
const Todos = dynamic(() => import("./Todos"), {
ssr: false,
});

const TodoList = () => {
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center font-sans">
        <div className="bg-white rounded shadow-lg p-6 m-12 w-full lg:w-2/4 ">
          <div className="mb-4">
            <h1 className="text-gray-900">Todo List</h1>
            <AddTodo />
          </div>
          <div>
            <Todos />
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList