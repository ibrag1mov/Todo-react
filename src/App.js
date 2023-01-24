
import {List} from "./components/List"
import {Item} from "./components/Item"
import {useRef , useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



function App() {

  const inputValue = useRef()


  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])


  const handleSubmit = (evt)=>{
    evt.preventDefault();
    if(inputValue.current.value != ""){
      setTodos([...todos,{
        id: todos.at(-1)?.id+1 || 1,
        text: inputValue.current.value,
        isCompleted: false
      }]);

      inputValue.current.value = ""
      toast.success("Todo qo'shildi")
    }
    else{
      alert("Todoni kiriting")
    }

  }


  localStorage.setItem('todos', JSON.stringify(todos))


  return (
    <div className="container">
      <h1 className="display-2 text-center fw-bold my-3">TODO APP</h1>
      <form onSubmit={handleSubmit} className="w-50 mx-auto p-5 shadow d-block">
        <div className="input-group">
          <input ref={inputValue} className="form-control" type='text' placeholder='Todo..'/>
          <button className="btn btn-primary" type="submit">SEND</button>
        </div>
      </form>
     {
      todos.length ? (
        <List>
        {
          todos.map(todo => (
            <Item key={todo.id} todos={todos} setTodos={setTodos} text={todo.text} id={todo.id} isCompleted = {todo.isCompleted}/>
          ))
        }
      </List>
      ) : (
        <h2 className="text-center h2 mt-5">Todolar mavjud emas</h2>
      )
     }
     <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </div>
  )
}

export default App;
