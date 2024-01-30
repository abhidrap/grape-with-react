import React, { Component } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css'; 
import './editor.css';

class GrapesJSComponent extends Component {
  
  componentDidMount() {
    
    this.editor = grapesjs.init({
      container: "#editor",
      fromElement: true,
      height:'100vh' ,
      width: "auto",
      storageMAnager:false,
      blocks: ['h1', 'h2', 'paragraph', 'image', 'video'],
      components:[
        {
          id: 'custom-block',
          label: 'Custom Block',
          content: `
            <div>
              <h3>This is a custom block</h3>
              <p>With some custom content</p>
            </div>
          `,
        },
      ],
      

    });
    this.editor.BlockManager.add('Heading', {
      label: 'Heading',
      category: 'Typography',
      content: `<section><h1 style="">paragraph</h1></section>`,
    });

    this.editor.BlockManager.add('Paragraph', {
      label: 'Paragraph',
      category: 'Typography',
      content: `<section><p style="">paragraph</p></section>`,
    });

    this.editor.BlockManager.add('Image', {
      label: 'Image',
      category: 'Media',
      content: { type: 'image' },
    });

    this.editor.BlockManager.add('Video', {
      label: 'Video',
      category: 'Media',
      content: { type: 'video' },
    });

    this.editor.BlockManager.add('Audio', {
      label: 'Audio',
      category: 'Media',
      content: `
        <audio controls>
          <source src="" type="audio/ogg">
          <source src="" type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio>
      `,
    });

    this.editor.BlockManager.add('Navbar', {
      label: 'Navbar',
      category: 'Navigation',
      content: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <!-- Navbar content goes here -->
        </nav>
      `,
    });

    this.editor.BlockManager.add('Button', {
      label: 'Button',
      category: 'Navigation',
      content: `<button type="button" class="btn">Button</button>`,
    });

    // Additional block managers
    this.editor.BlockManager.add('CustomBlock1', {
      label: 'Custom Block 1',
      category: 'Custom',
      content: `<div class="custom-block-1">Custom Content 1</div>`,
    });

    this.editor.BlockManager.add('CustomBlock2', {
      label: 'Custom Block 2',
      category: 'Custom',
      content: `<div class="custom-block-2">Custom Content 2</div>`,
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