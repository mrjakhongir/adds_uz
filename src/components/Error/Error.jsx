import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import { ErrorDiv } from './style.js'

function Error() {
  return (
    <ErrorDiv>
      <div>404</div>
        <h1>Page not found</h1>
        <p>Duis dolor sit amet, consectetur adipiscing elitvestibulum in pharetra.</p>
        <button>
          <Link to="/" className='error'> 
          Back to the main
          </Link>
        </button>
    </ErrorDiv>
  )
}

export default Error