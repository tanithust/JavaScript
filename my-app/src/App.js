import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            number : 0
        }
        this.double = this.double.bind(this)
        this.plusOne = this.plusOne.bind(this)
        this.randomNumber = this.randomNumber.bind(this)
    }
    double(){
        this.setState(prevState => {
            return {
                number : prevState.number *2
            }
        })
    }
    plusOne(){
        this.setState(prevState => {
            return {
                number : prevState.number +1
            }
        })
    }
    randomNumber()
    {
     this.setState( ()=> {
         return {
             number : Math.floor(Math.random() *10)
         }
     })   
    }
    render(){
        return(
            <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.double}>Click to double</button>
            <button onClick={this.plusOne}>Click to plus one</button>
            <button onClick={this.randomNumber}>Random</button>
            </div>
        )
    }
}
export default App