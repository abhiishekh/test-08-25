import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './Product'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App