import React from 'react'
import ReactDOM from 'react-dom'

import AppView from './app/'

const createRootElement = () => {
    let root = document.querySelector('body > div#root')

    if (!root) {
        root = document.createElement('div')
        root.id = 'root'
        document.body.appendChild(root)
    }

    return root
}

ReactDOM.render(<AppView />, createRootElement())
