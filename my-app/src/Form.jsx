import React from 'react'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            isCollege : true,
            gender : "", 
            favColor : "Blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name] : checked }) :this.setState({ [name] : value })
    }
    render(){
        return (
        <form>
            <input 
                type="text" 
                value={this.state.firstName} 
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange} 
            />
            <br />
            <input 
                type="text" 
                value={this.state.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.handleChange} 
            />
            <br/>
            <textarea placeholder="Note" onChange={this.handleChange}/>
            <br/>
            <label>
                <input 
                    type="checkbox" 
                    name="isCollege" 
                    checked={this.state.isCollege}
                    onChange={this.handleChange}
                /> Is college ?
            </label>
            <br />

            <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="male" 
                    checked={this.state.gender ==="male"}
                    onChange={this.handleChange}
                /> Male
            </label>
            <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="female" 
                    checked={this.state.gender ==="female"}
                    onChange={this.handleChange}
                /> Female
            </label>
            <br />
            <label>
                <select
                    value = {this.state.favColor}
                    onChange = {this.handleChange}
                    name = "favColor"
                >
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Yeallow">Yeallow</option>
                </select>
            </label>
            <h3>You are : {this.state.gender}</h3>
            <h2>Your favourite color is :{this.state.favColor}</h2>
            <h3>{this.state.firstName} {this.state.lastName}</h3>
        </form>    
        )
    }
}
export default Form