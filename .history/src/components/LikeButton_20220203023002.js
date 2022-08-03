import react from 'react'

class LikeButton extends React.Component {

    state = {
        likes: 0
      };
    
    render() {
        
        return <button>Likes: {this.state.likes} </button>
      }
    }

    export default LikeButton;
