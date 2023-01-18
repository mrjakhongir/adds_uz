import React from 'react'
import { CategoryC, CategoryCard } from './style'
import {Categories} from './categoryData'

const Category = () => {
  return (
    <CategoryC>
        <CategoryC.Header>
          <div>
            <div>
            <label htmlFor="filter">Filter: </label>
            <select  id="filter">
              <option value="bmw">BMW</option>
              <option value="apple">Apple</option>
              <option value="samsung">All</option>
            </select>
            </div>
            <div>
            <label htmlFor="sort">Sort by: </label>
            <select  id="sort">
              <option value="bmw">Price</option>
              <option value="apple">data</option>
              <option value="samsung">a-z</option>
            </select>
            </div>
          </div>
          <p>321: last updated</p>
        </CategoryC.Header>
        <main>
          {
            Categories.map(category => {
              return(
                <CategoryCard  key={category.id}>
                   <img src={category.image} alt="" />
                   {category.text}
                </CategoryCard>
              )
            })
          }
        </main>
    </CategoryC>
  )
}

export default Category