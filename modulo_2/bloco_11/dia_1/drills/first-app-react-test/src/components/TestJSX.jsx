import React from 'react';

class TestJSX extends React.Component {
  render() {
    const firstJSXVariable = 'Hello, JSX';
    return(
      <h1 className='hello-class'>{firstJSXVariable}</h1>
    );
  }
} 


export default TestJSX;
