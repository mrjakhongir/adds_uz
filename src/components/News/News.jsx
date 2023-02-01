import React from 'react'
import NewsList from './NewsList'

import { NewsC } from './style'

export default function News() {

  return (
    <NewsC>

      <NewsC.filter className='news-filter'>
        <div className='all active'>All</div>
        <div className='subscribed'>Subscribed</div>
      </NewsC.filter>

      <NewsList />

    </NewsC>
  )
}
