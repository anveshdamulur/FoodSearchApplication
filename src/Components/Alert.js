import React from 'react'
import './alertStyle.css'
const Alert = ({alert}) => {
    return (
        <div className="alert">
            <center>
                <h1 className="alert-title">{alert}</h1>
            </center>
        </div>
    )
}

export default Alert
