import React, {Component} from 'react'
// import Puppieslist from './puppieslist'
import axios from 'axios';

export default class Profile extends Component {
  constructor () {
    super()
    this.state = {
      puppy: {}
    }
    this.profile = this.profile.bind(this)
  }
  async componentDidMount () {
    const puppyId = this.props.match.params.puppyId
    const res = await axios.get(`/api/puppies/${puppyId}`)
    this.setState({puppy: res.data})
  }

  render () {
    console.log('whats this ', this.state.puppy)
    const puppy = this.state.puppy
    return (
      <div id='profile' className='column'>
        <h1>My name is {puppy.name}</h1>
          <p>My age is {puppy.age}</p>
          <p>Fun fact about me: {puppy.bio}</p>

      </div>
    )
  }
}
