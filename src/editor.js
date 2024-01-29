import React, { Component } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

class GrapesJSComponent extends Component {
  constructor(){
    super();
    this.editor=null;
  }
  componentDidMount() {
    // GrapesJS initialization code
    this.editor = grapesjs.init({
      container: "#editor",
      fromElement: true,
      height:'100vh' ,
      width: "auto",
      storageMAnager:false,
    });
  }

  render() {
    return (
      
      <div id="editor">
      <p>testing purpose, using grapejs library yayy</p>
      </div>
      
    );
  }
}

export default GrapesJSComponent;