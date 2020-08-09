import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { MyComponent } from './demo';

function App() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300);
    return (
        <div className="App">
            <MyComponent />
        </div>
    )

}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)