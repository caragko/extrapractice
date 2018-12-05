import React, {Component} from 'react'
import axios from 'axios'
import Puppieslist from './puppieslist'

export default class Allpups extends Component {
    constructor () {
        super()
        this.state = {
        puppieslist: []
        }
    }

    async componentDidMount () {
        try {
            console.log('async part ', this.state)
            const res = await axios.get('/api/puppies')
            console.log('inside res.data ', res.data)
            this.setState({ puppieslist: res.data })
            console.log('after ', this.state)
        }
        catch (error) {
            console.log(error)
        }
    }

    render () {
        const puppieslist = this.state.puppieslist

        return (
        <Puppieslist puppieslist={puppieslist} />
        )
    }
}