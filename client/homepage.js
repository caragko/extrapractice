import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navheader from './navheader'
import Aboutus from './aboutus'
import Contactinfo from './contactinfo'
import Profile from './profile'
import Puppieslist from './puppieslist'
// import AllPups from './allpups'

export default class Homepage extends React.Component {
  render () {
    return (
      <Router>
        <div id='homepage'>
          <div className='column container'>
            <div id='header'>
              <h1>Welcome to Puppies</h1>
            </div>
            <Navheader />
          </div>
          <Route exact path='/puppies' component={Puppieslist} />
          <Route path='/puppies/:profileId' component={Profile} />
          <Route exact path='/aboutus' component={Aboutus} />
          <Route path='/contactinfo' component={Contactinfo} />
          <Route exact path='/' component={Puppieslist} />
        </div>
      </Router>
    )
  }
}