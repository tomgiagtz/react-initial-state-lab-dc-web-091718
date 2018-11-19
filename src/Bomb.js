import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    getText() {
        if (this.state.secondsLeft){
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
            return <div>Boom!</div>
        }
    }

    render() {
        return this.getText()
    }
}

export default Bomb