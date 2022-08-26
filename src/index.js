import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Page() {

  return (
    <Router>
      <div className="page">
          <Header />
          <Body /> 
          <Footer />
      </div>
    </Router>
  )
  
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page/>)