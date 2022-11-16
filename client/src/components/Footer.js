import React from 'react'
import "../styles/footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-info'>
            <h1>Mockup de un e-commerce de una pasteleria</h1>
            <h1>por Adrian Ferrari</h1>
            </div>
            <div>
                <p>Hecho con:</p>
                <ul>
                    <li>Reactjs</li>
                    <li>React-Router</li>
                    <li>React-Redux</li>
                    <li>Expressjs</li>
                    <li>Nodejs</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer