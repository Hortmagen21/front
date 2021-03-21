import React, {Component } from 'react';


class HelloWorld extends Component{
  render(){
    return(
        <div>
          <h2>Hello {this.props.name}</h2>
        </div>
      );
  }
}

export default HelloWorld;
