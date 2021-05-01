import React from 'react';

class Pokemon extends React.Component {
  render(){
    const { image, name } = this.props.pokemon;
    return (
      <div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;
