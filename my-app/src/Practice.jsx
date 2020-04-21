import React from 'react'
class Practice extends React.Component {
     constructor(){
         super();
         this.state = {
             name : "Tan Phan",
             age : "19"
         }
     }
     render(){
         return (
             <div>
             <h1>{this.state.name}</h1>
             <h3>{this.state.age} years old</h3>
             </div>
         )
     }
 }
 export default Practice