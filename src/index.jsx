import React from 'react';
import {render} from 'react-dom';

class Main extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<Main/>, document.getElementById('app'));
