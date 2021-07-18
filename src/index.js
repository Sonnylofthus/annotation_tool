import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
class ImageHolder extends React.Component {
  render() {
    return (
      <container fixed>
        <h1>hi there</h1>
      </container>
    );
  }
}
class ToolButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.props={name:props};
  // }
  render() {
    return(
    <div className="main_layout">
      <div id="panel-left">
        <div id='panel-navigation'>
        </div>
        <div id='panel-file-viewer'>
        </div>
      
    </div>
      <Container id='mid-layout'>
        <ImageHolder className='panel-controller'></ImageHolder>
        
      </Container>
      <div id='img-placeholer'></div>
        <div id='panel-tools'></div>
    </div>
    
    );
  }
}
function App() {
  return(
    <div>
    <ToolButton></ToolButton>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);