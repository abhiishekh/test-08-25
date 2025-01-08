import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    
  return (
    <div>
        hi there
        <button onClick={()=> navigate('/product')}>Go to product page</button>
    </div>
  )
}

export default Home