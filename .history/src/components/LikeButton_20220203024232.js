import React from 'react';
import './LikeButton.css'

class LikeButton extends React.Component {

    state = {
        like: 0
      };
    
    render() {
        
        return <button onClick={this.addLike} className='id={this.props.itemId}>Likes: {this.state.like} </button>
  
      }

      addLike = () => {
        let newCount = this.state.like + 1;
          this.setState({
          like: newCount
        });
      };
    }

   

    export default LikeButton;
