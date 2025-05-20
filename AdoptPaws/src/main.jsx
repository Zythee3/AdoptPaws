import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PostAdoption from './pages/postAdoption/postAdoption'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostAdoption/>
  </StrictMode>,
)
