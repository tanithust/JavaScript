import React from 'react'
import TodoItem from './TodoItem'
import TodoData from './TodoData'

class TodoList extends React.Component{
    constructor(){
        super()
        this.state ={
            todos : TodoData
        }
    }
    render(){
        const TodoComponent=this.state.todos.map(work => <TodoItem key={work.id} item={work} />)
        return(
            <div className="todo-list">
                {TodoComponent}
            </div>
        )
    }
}
export default TodoList