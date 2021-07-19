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
    <div class="container-fluid main_layout">
      <div id="panel-left">
        <div id='panel-navigation'>
        </div>
        <div id='panel-file-viewer'>
        </div>
      
    </div>
    <div class='container' id='panel-tools'>
        <div ></div>
      </div>
      <div class='container' id='mid-layout'>
        <div id='img-placeholer'></div>
      </div>
      
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