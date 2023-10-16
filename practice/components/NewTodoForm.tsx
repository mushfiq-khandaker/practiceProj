'use client'

import {useState} from 'react'
import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {

    const [state, updateState] = useState('')

    return (
        <div color='red'>
        <form action={newTodo}>
            <input name='content' type='text' className="border border-black/25"></input>
            <button type='submit' className="border border-black">Add New Todo</button>
        </form>
        </div>
    )
}

export default NewTodoForm;