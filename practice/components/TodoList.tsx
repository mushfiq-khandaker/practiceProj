
import Todo from './Todo'

const TodoList = ({todos}) => {
    
    return (
        <div>
            {todos.map(todo => {
                return <Todo todo={todo} key={todo.id}/>
            })}
        </div>
    )
}

export default TodoList