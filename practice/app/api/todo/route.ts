import { NextResponse } from "next/server"
import db from '@/utils/db'

export const GET = async(request: Request) => {
    const allTodos = await db.todo.findMany({})
    return NextResponse.json(allTodos)


}

export const POST = async(request: Request) => {
    const data = await request.json()



    return NextResponse.json({message: data})


}