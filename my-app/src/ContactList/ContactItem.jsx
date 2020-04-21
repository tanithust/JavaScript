import React from 'react'
function ContactItem(props){
    console.log(props)
    return (
        <div className="contact-list">
        <img src={props.imgURL} style = {{display: !props.imgURL && "none"}} />
        <h3 style={{display: !props.name && "none" }}>{props.name}</h3>
        <p style = {{display: !props.team && "none"}}>Team: {props.team}</p>
        <p style = {{display: !props.nationality && "none"}}>Nationality: {props.nationality}</p>
        </div>
    )
}
export default ContactItem