import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Counter from './Counter.jsx'
import ToggleButton from './ToggleButton.jsx'
import TextInput from './TextInput.jsx'
import FetchPost from './FetchPost.jsx'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

