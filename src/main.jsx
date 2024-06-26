import ReactDOM from 'react-dom/client'
import Alfabeto from './pages/Alfabeto'
import React from 'react'
import 'src/styles/index.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <Toaster
        position='top-center'
        className='toaster'
      />
      <Alfabeto />
    </React.Fragment>
  </React.StrictMode>,
)
