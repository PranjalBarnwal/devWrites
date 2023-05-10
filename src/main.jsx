import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
 <BrowserRouter>
  <App />
</BrowserRouter>,
 </AuthContextProvider> 
)
