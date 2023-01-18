import React from 'react'
import Opener from '../Pages/Opener/Opener'
import { RoootC } from './style'
import {Routes, Route} from 'react-router-dom'
import BrandsList from '../components/Brands/BrandsList'

const Root = () => {
  return (
    <RoootC>
      <Routes>
        <Route path='/' element={<Opener/>}>
            <Route path="/brands" element={<BrandsList/>} />
        </Route>
      </Routes>
        
    </RoootC>
  )
}

export default Root