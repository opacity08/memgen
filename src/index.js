import React from "react"
//import ReactDom from "react-dom"
import App from "./App"
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDom.render(<App />, document.getElementById('root'))