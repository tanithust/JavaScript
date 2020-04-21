import React from 'react'
import TodoData from './List/TodoData'
import TodoItem from './List/TodoItem'

class App1 extends React.Component {
    constructor(){
        super()
        this.state = {
            todo : TodoData
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id) {
        this.setState( prevState => {
            const updatedState = prevState.todo.map(item => {
                if(item.id === id) 
                    {item.completed = !item.completed}
                return item
            })
            return {
                todo : updatedState
            }
        })
    }
    render(){
        const TodoComponent = this.state.todo.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleClick} />)
        return(
            <div>
                {TodoComponent}
            </div>
        )
    }
}
export default App1