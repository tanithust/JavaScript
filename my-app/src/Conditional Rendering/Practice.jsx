import React from 'react'

class Practice extends React.Component {
    constructor(){
        super()
        this.state = {
            isLogIn : true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return {
                isLogIn : !prevState.isLogIn
            }
        })
    }
    render(){
        let buttonText = this.state.isLogIn ? "Log Out" : "Log In"
        let text = this.state.isLogIn ? "loged in" : "loged out"
        return (
           <div>
               <h1>You are {text}</h1>
               <button onClick={this.handleClick}>{buttonText}</button>
           </div>
        )
    }
}
export default Practice