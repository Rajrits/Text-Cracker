import React,{useState} from 'react'

function Alert(props) {
    return (
                       
            props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.alerttext}
            </div>
            
    )
}

export default Alert
