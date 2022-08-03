import React, { Component } from 'react';
import './Haiku.css'

class Haiku extends Component {
    state = {
        liked: false
    }

    taggleLike = (state) => {
        this.setState({
        })
    }

    render() {
        const changeColour = this.state.liked ? "red" : "grey"
    }

    return (
        <div>
        <h4>{this.props.hai}</h4>
        </div>
    )

}


