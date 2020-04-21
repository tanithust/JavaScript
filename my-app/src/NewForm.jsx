import React from 'react'

class NewForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : 0,
            gender : "",
            location : "",
            dietaryRestriction : {
                isVegan : false ,
                isKosher : false ,
                isLactoseFree : false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target 
        type === "checkbox" ? 
        this.setState(prevState => {
            return {
                dietaryRestriction : {
                    ...prevState.dietaryRestriction,
                    [name] :checked
            }
        }
        }) : 
        this.setState({ [name] : value })
    }
    render(){
        return(
            <form>
                First name : 
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First name" 
                    onChange={this.handleChange}/>
                <br/>
                Last name :
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last name" 
                    onChange={this.handleChange}/>
                <br/>
                Age : 
                <input 
                    type="number" 
                    name="age" 
                    placeholder="Age" 
                    onChange={this.handleChange} />
                <br/>
                <label> Gender: <br/>

                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />Male
                </label>
                <label>    
                    <br/>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />Female
                </label>
                <br/>
                Location you're traveling to :
                <select
                    name = "location"
                    value = {this.state.location}
                    onChange={this.handleChange}
                >
                    <option value="France">Frace</option>
                    <option value="Germany">Germany</option>
                    <option valuue="United Kingdom">United Kingdom</option>
                    <option value="Spain">Spain</option>
                </select>
                <br />
                Dietary restriction : 
                <br/>
                <label>
                    <input 
                        type="checkbox"  
                        name="isVegan"
                        checked={this.state.dietaryRestriction.isVegan}
                        onChange={this.handleChange}
                    />Vegan
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox"  
                        name="isKosher"
                        checked={this.state.dietaryRestriction.isKosher}
                        onChange={this.handleChange}
                    />Kosher
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox"  
                        name="isLactoseFree"
                        checked={this.state.dietaryRestriction.isLactoseFree}
                        onChange={this.handleChange}
                    />Lactose Free
                </label>
            </form>
        )
    }
}
export default NewForm