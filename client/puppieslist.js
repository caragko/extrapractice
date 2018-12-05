import React from 'react'
import {Link} from 'react-router-dom'

const Puppieslist = (props) => {
  const puppies = props.puppieslist

  // const puppies = props.puppies || []

  return (
    <div id='puppies' className='column'>
      {
        puppies.map(puppy => (
          <div className='puppy' key={puppy.id}>
            <Link to={`/puppies/${puppy.id}`}>
              <h3>{puppy.name}</h3>
            </Link>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default Puppieslist
