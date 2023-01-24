import { ToastContainer, toast } from "react-toastify";

export const Item = ({text, id, isCompleted, todos, setTodos}) => {

    const handleDelete = (todoId) =>{
        const filteredTodos = todos.filter((todo)=>todo.id !== todoId);

        setTodos([...filteredTodos]);
        toast.error("Todo o'chirildi")
    }


    const handleEdit = (todoId, text) =>{

        const newText = prompt("yangi text kiriting", text)

        const findTodo = todos.find(todo => todo.id === todoId)
        findTodo.text = newText;

        setTodos([...todos])
        toast.warning("Todo o'zgartirildi")
    }

    const handleChange = (todoId)=>{

        const findTodo = todos.find((todo)=>todo.id === todoId);
        findTodo.isCompleted = !findTodo.isCompleted;

        setTodos([...todos])
        if(findTodo.isCompleted){
            toast.info("Todo bajarildi")
        }
    }


    return (
        <li className="list-group-item d-flex align-items-center">
            <span>{id}.</span>
            <input onChange={() => handleChange(id)} checked={isCompleted} className="form-check-input mx-3" type={'checkbox'}/>
            <strong className={isCompleted ? "text-decoration-line-through text-success" : ""}>{text}</strong>
            <button onClick={() => handleEdit(id, text)} className="btn btn-warning ms-auto mx-3">EDIT</button>
            <button onClick={() => handleDelete(id)} className="btn btn-danger">DELETE</button>
        </li>
    )
}