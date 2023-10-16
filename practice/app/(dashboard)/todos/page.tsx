import db from '@/utils/db'
import TodoList from '@/components/TodoList'
const getData = async () => {
    const todos = await db.todo.findMany({})
    return todos
}

const TodosPage = async() => {
    const todos = await getData()
    console.log('My TDOSO', todos)
    return(
        <div>
            <h1>MY TODO LIST</h1>
            <TodoList todos={todos}/>
        </div>
    )
}

export default TodosPage