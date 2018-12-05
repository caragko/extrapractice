import React from 'react'
import {Link} from 'react-router-dom'

const Puppieslist = (props) => {
  const puppies = [{
    id: 1 , 
    name: 'Bob',
    age: 1,
    bio: 'I like to dig',
  }, {
    id: 2 , 
    name: 'Kit',
    age: 2,
    bio: 'I like to catch',
  }, {
    id: 3 , 
    name: 'Jay',
    age: 3,
    bio: 'I like to bark',
  }, {
    id: 4 , 
    name: 'Tom',
    age: 2,
    bio: 'I like to sleep',
  }, {
    id: 5 , 
    name: 'Aly',
    age: 0,
    bio: 'I like to snuggle',
  }];
  
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