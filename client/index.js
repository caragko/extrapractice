import React from 'react'
import reactDOM from 'react-dom'

console.log('you should see this log in your Chrome dev tools.')

const Example = () => <p>This will appear on your page!</p>

reactDOM.render(<Example />, document.getElementById('app'))
