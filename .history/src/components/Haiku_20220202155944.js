import React, { Component } from 'react';
import './Haiku.css'

class Haiku extends Component {
    state = {
        liked: false
    }

    toggleLike = (state) => {
        this.setState({ liked: !this.state.liked
        })
    }

    render() {
        const changeColour = this.state.liked ? "red" : "grey"
    

    return (
        <div>
            <h4>{this.props.haiku.first_verse}</h4>
            <h4>{this.props.haiku.second_verse}</h4>
            <h4>{this.props.haiku.third_verse}</h4>
            </div>
            <button className="likeBtn" onClick={this.toggleLike}>
            <i className="fas fa-heart fa-lg" style={{ color: changeColour }}></i>
            </button>
        </
    
    )

}
}

