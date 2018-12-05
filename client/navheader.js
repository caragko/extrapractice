import React from 'react'
import {Link} from 'react-router-dom'

const Navheader = (props) => {
    return (
        <div id='navheader' className='row'>
            <Link to='/puppies'>Puppies </Link>
            <Link to='/aboutus'>About us </Link>
            <Link to='/contactinfo'>Contact us </Link>
        </div>
    )
}

export default Navheader