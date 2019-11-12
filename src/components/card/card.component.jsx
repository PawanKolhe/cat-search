import React, { Component } from 'react';
import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

import './card.styles.css'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Card extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-img">
          <BounceLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={'#FFFFFF'}
            loading={this.state.loading}
          />
          <img 
            src={`https://robohash.org/${this.props.character.name}?set=set4&size=180x180`} 
            style={this.state.loading ? {display: 'none'} : {}}
            onLoad={() => this.setState({loading: false})} 
            alt="Cat" 
          />
        </div>
        <div className="card-text">
          <h1>{this.props.character.name}</h1>
        </div>
      </div>
    );
  }
}

export default Card;